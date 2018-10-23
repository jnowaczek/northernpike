import os
from pathlib import Path

from aiohttp import web, http_websocket

WEB_ROOT = Path(__file__).parents[2] / 'ui/dist/controlpanel/'


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
                await ws.send_str(msg.data)
                print('Sent websocket echo')
        elif msg.type == http_websocket.WSMsgType.ERROR:
            print('ws connection closed with exception %s' %
                  ws.exception())

    print('websocket connection closed')

    return ws


async def on_shutdown(app):
    # close peer connections
    for ws in set(app['websockets']):
        await ws.close()


if __name__ == '__main__':
    server = web.Application()
    server.on_shutdown.append(on_shutdown)
    server.router.add_get('/', root_handler)
    server.router.add_get('/ws', websocket_handler)
    server.router.add_static(prefix='/', path=WEB_ROOT)
    web.run_app(server, host='127.0.0.1', port=8080)
