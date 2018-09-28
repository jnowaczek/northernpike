import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {InstrumentComponent} from './instrument/instrument.component';
import { CameraviewComponent } from './cameraview/cameraview.component';
import { SwitchesComponent } from './switches/switches.component';
import { ThreejsComponent } from './threejs/threejs.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentComponent,
    CameraviewComponent,
    SwitchesComponent,
    ThreejsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
