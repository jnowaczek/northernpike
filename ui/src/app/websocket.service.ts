import {Injectable} from '@angular/core';
import {Observer, Observable, Subject} from 'rxjs';
import {Telemetry} from './telemetry';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor() {
  }

  private subject: Subject<Telemetry>;

  public connect(url): Subject<Telemetry> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): Subject<Telemetry> {
    const ws = new WebSocket(url);

    const observable = Observable.create(
      (obs: Observer<Telemetry>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      })
    const observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    }
    return Subject.create(observer, observable);
  }

}
