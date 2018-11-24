import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {WebsocketService} from './websocket.service';
import {Message, load} from 'protobufjs';

const WS_URL = 'ws://' + location.host + '/ws';

@Injectable({
  providedIn: 'root'
})
export class RovStateService implements OnInit {

  public state = new BehaviorSubject(new RovState());
  private socket: Subject<MessageEvent>;

  constructor(websocket: WebsocketService) {
    this.socket = websocket.connect(WS_URL);
    this.socket.subscribe((msg: MessageEvent) => {
      this.parseMessage(msg);
    });
  }

  public pushState(newState: RovState): void {
    this.socket.next(new MessageEvent('telemetry', {data: newState}));
  }

  private parseMessage(msg: MessageEvent): void {
    const decoded = Message.decode(msg.data);
    decoded.$type;
  }

  ngOnInit() {
    load('shared/protos/telemetry.proto', (error) => {
      if (error) {
        throw error;
      }
    });
  }
}

export class Switch {
  label: string;
  value: boolean;
}

export const SWITCHES: Switch[] = [
  {label: 'LED', value: false},
  {label: 'S 2', value: false},
  {label: 'S 3', value: false},
  {label: 'S 4', value: false},
  {label: 'S 5', value: false},
];

export class RovState {
  static switchState: Switch[];
  static ledIntensity: number;
  static batteryVoltage: number;
  static water: boolean;
  static temperature: number;
}
