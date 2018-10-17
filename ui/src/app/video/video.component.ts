import { Component, OnInit, ViewChild } from '@angular/core';
declare var SimplePeer: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('hardwareVideo') hardwareVideo: any;

  targetpeer: any;
  peer: any;
  navigator = <any>navigator;

  ngOnInit() {

    const constraints =
      {
        audio: false,
        video: {width: 900, height: 566}
      };

    const video = this.hardwareVideo.nativeElement;
    let p2p: any;

    this.navigator.getUserMedia = (this.navigator.getUserMedia || this.navigator.webkitGetUserMedia ||
                                    this.navigator.mozGetUserMedia || this.navigator.msGetUserMedia);

    this.navigator.getUserMedia(constraints, function(stream) {

    p2p = new SimplePeer ({
      initiator: location.hash === '#init',
      trickle: false,
      stream:stream
    })

    p2p.on('signal', function(data) {
      console.log(JSON.stringify(data));

      this.targetpeer = data;
    })

    p2p.on('data', function(data) {
      console.log('Recieved message:' + data);
    })

    p2p.on('stream', function(stream) {
      video.src = URL.createObjectURL(stream);
      video.play();
    })

    }, function(err){
    console.log('Failed to get stream', err);
    });

    setTimeout(() => {
      this.peer = p2p;
      console.log(this.peer);
    }, 5000);
  }

  connect() {
    this.peer.signal(JSON.parse(this.targetpeer));
  }

  message() {
    this.peer.send('p2p connected');
  }

}
