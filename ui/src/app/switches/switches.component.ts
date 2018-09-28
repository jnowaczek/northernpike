import { Component, OnInit } from '@angular/core';
import {TOGGLE_SWITCHES} from "../toggle_switches";
import {Switch} from "../switch";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})

export class SwitchesComponent implements OnInit {

  buttons: Switch[];

  constructor() {
    this.buttons = TOGGLE_SWITCHES;
  }

  ngOnInit() {
  }

}
