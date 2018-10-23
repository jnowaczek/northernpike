import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  streamIp = '127.0.0.1';

  constructor() {
  }

  ngOnInit() {
  }

  setStreamIp(){
    this.streamIp = streamIpInput.value;
    console.log(this.streamIp);
  }

}
