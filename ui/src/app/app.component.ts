import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Northern Pike Control Panel';
  stream_ip = '127.0.0.1'; // Change to static IP of raspberry pi
}
