import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {

  @Input()
  public imagepath: String;

  constructor() {
  }

  ngOnInit() {
  }

}
