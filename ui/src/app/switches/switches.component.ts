import {Component, OnInit} from '@angular/core';
import {Switch, SWITCHES, Telemetry} from '../telemetry';
import {RovStateService} from '../rovstate.service';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})

export class SwitchesComponent implements OnInit {

  rovstateservice: RovStateService;
  switchState: Switch[];

  constructor(rovstateservice: RovStateService) {
    this.rovstateservice = rovstateservice;
  }

  changeState() {
    this.rovstateservice.state.next(new Telemetry(this.switchState));
  }

  ngOnInit() {
    this.switchState = SWITCHES;
    this.rovstateservice.state.subscribe(update => {
      this.switchState = update.switchState;
    });
  }
}
