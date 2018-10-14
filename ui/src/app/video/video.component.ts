import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('hardwareVideo') hardwareVideo: any;

  navigator = <any> navigator;
  localStream;

  ngOnInit() {

    //size of webcam stream
    const constraints =
      {
        audio: false,
        video: {width: 900, height: 566},
        frameRate: {ideal: 30, max: 60}
      };

    const video = this.hardwareVideo.nativeElement;
    this.navigator = <any>navigator;

    this.navigator.getUserMedia = (this.navigator.getUserMedia || this.navigator.webkitGetUserMedia
      || this.navigator.mozGetUserMedia || this.navigator.msGetUserMedia);

    this.navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        this.localStream = stream;
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });

  }
}
