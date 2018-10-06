import {Component, OnInit} from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video: HTMLVideoElement;

  constructor() {
  }

  ngOnInit() {
    this.video = <HTMLVideoElement> document.getElementById('video');

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.attachMedia(this.video);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !');
        hls.loadSource('https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8');
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log('manifest loaded, found ' + data.levels.length + ' quality level');
        });
      });
      this.video.play();
    }
  }

}
