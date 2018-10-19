import {Component} from '@angular/core';
import {RovStateService} from './rovstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Northern Pike Control Panel';

  constructor(private rovstateservice: RovStateService) {
    rovstateservice.state.subscribe(update => {
      console.log('Response from websocket: ' + update);
    });
  }
}
