import argparse
import asyncio
import json
import logging
import os

import cv2
from aiohttp import web, http_websocket
from av import VideoFrame

from aiortc import RTCPeerConnection, RTCSessionDescription, VideoStreamTrack
from aiortc.contrib.media import MediaBlackhole, MediaPlayer, MediaRecorder

WEB_ROOT = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'ui/dist/controlpanel/')


class VideoTransformTrack(VideoStreamTrack):
    def __init__(self, track, transform):
        super().__init__()  # don't forget this!
        self.counter = 0
        self.received = asyncio.Queue(maxsize=1)
        self.track = track
        self.transform = transform

    async def recv(self):
        frame = await self.track.recv()
        self.counter += 1

        if self.transform == 'edges':
            # perform edge detection
            img = frame.to_ndarray(format='bgr24')
            img = cv2.cvtColor(cv2.Canny(img, 100, 200), cv2.COLOR_GRAY2BGR)

            # rebuild a VideoFrame, preserving timing information
            new_frame = VideoFrame.from_ndarray(img, format='bgr24')
            new_frame.pts = frame.pts
            new_frame.time_base = frame.time_base
            return new_frame
        elif self.transform == 'rotate':
            # rotate image
            img = frame.to_ndarray(format='bgr24')
            rows, cols, _ = img.shape
            M = cv2.getRotationMatrix2D((cols / 2, rows / 2), frame.time * 45, 1)
            img = cv2.warpAffine(img, M, (cols, rows))

            # rebuild a VideoFrame, preserving timing information
            new_frame = VideoFrame.from_ndarray(img, format='bgr24')
            new_frame.pts = frame.pts
            new_frame.time_base = frame.time_base
            return new_frame
        else:
            return frame


async def offer(request):
    params = await request.json()
    offer = RTCSessionDescription(
        sdp=params['sdp'],
        type=params['type'])

    pc = RTCPeerConnection()
    pcs.add(pc)

    # prepare local media
    player = MediaPlayer(os.path.join(WEB_ROOT, 'demo-instruct.wav'))
    if args.write_audio:
        recorder = MediaRecorder(args.write_audio)
    else:
        recorder = MediaBlackhole()

    @pc.on('datachannel')
    def on_datachannel(channel):
        @channel.on('message')
        def on_message(message):
            channel.send('pong')

    @pc.on('iceconnectionstatechange')
    async def on_iceconnectionstatechange():
        print('ICE connection state is %s' % pc.iceConnectionState)
        if pc.iceConnectionState == 'failed':
            await pc.close()
            pcs.discard(pc)

    @pc.on('track')
    def on_track(track):
        print('Track %s received' % track.kind)

        if track.kind == 'audio':
            pc.addTrack(player.audio)
            recorder.addTrack(track)
        elif track.kind == 'video':
            local_video = VideoTransformTrack(track, transform=params['video_transform'])
            pc.addTrack(local_video)

        @track.on('ended')
        async def on_ended():
            print('Track %s ended' % track.kind)
            await recorder.stop()

    # handle offer
    await pc.setRemoteDescription(offer)
    await recorder.start()

    # send answer
    answer = await pc.createAnswer()
    await pc.setLocalDescription(answer)

    return web.Response(
        content_type='application/json',
        text=json.dumps({
            'sdp': pc.localDescription.sdp,
            'type': pc.localDescription.type
        }))


pcs = set()


# Serve index.html when '/' is requested
async def root_handler(request):
    return web.FileResponse(os.path.join(WEB_ROOT, 'index.html'))


# Serves 404s /index.html as required by Angular. Redirecting would change the url in the address bar (not desired
# behavior) refer to https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml
# DO NOT USE, currently breaks everything
async def deeplink_handler(request):
    return web.FileResponse(os.path.join(WEB_ROOT, 'index.html'))


async def websocket_handler(request):
    print('Websocket connection starting')
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    print('Websocket connection ready')

    async for msg in ws:
        print('websocket message received :' + msg.data)
        if msg.type == http_websocket.WSMsgType.TEXT:
            if msg.data == 'close':
                await ws.close()
            else:
                await ws.send_str(
                    r'"switchState":[{"label":"Lights","value":{"switchState":[{"label":"Lights","value":false},{"label":"Switch 2","value":false},{"label":"Switch 3","value":false},{"label":"Switch 4","value":false},{"label":"Switch 5","value":false}]}')
                print('Sent websocket response')
        elif msg.type == http_websocket.WSMsgType.ERROR:
            print('ws connection closed with exception %s' %
                  ws.exception())

    print('websocket connection closed')

    return ws


async def on_shutdown(app):
    # close peer connections
    coros = [pc.close() for pc in pcs]
    await asyncio.gather(*coros)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='WebRTC audio / video / data-channels demo')
    parser.add_argument('--port', type=int, default=8080,
                        help='Port for HTTP server (default: 8080)')
    parser.add_argument('--verbose', '-v', action='count')
    parser.add_argument('--write-audio', help='Write received audio to a file')
    args = parser.parse_args()

    if args.verbose:
        logging.basicConfig(level=logging.DEBUG)

    app = web.Application()
    app.on_shutdown.append(on_shutdown)
    app.router.add_get('/', root_handler)
    app.router.add_get('/ws', websocket_handler)
    app.router.add_static(prefix='/', path=r'../ui/dist/controlpanel/')
web.run_app(app, port=args.port)
