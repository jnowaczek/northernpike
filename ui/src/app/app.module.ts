import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxGaugeModule } from 'ngx-gauge';

import {AppComponent} from './app.component';
import {SwitchesComponent} from './switches/switches.component';
import {LinearGaugeComponent} from './linear-gauge/linear-gauge.component';
import {RadialGaugeComponent} from './radial-gauge/radial-gauge.component';
import {WebsocketService} from './websocket.service';
import {RovStateService} from './rovstate.service';
import {ViewportModule} from './viewport/viewport.module';
import { LightSliderComponent } from './light-slider/light-slider.component';
import { TempGaugeComponent } from './temp-gauge/temp-gauge.component';
import { PressureGaugeComponent } from './pressure-gauge/pressure-gauge.component';
import { ThrusterGaugeComponent } from './thruster-gauge/thruster-gauge.component';
import { BatteryGaugeComponent } from './battery-gauge/battery-gauge.component';
import { SlideSwitchComponent } from './slide-switch/slide-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchesComponent,
    LinearGaugeComponent,
    RadialGaugeComponent,
    LightSliderComponent,
    TempGaugeComponent,
    PressureGaugeComponent,
    ThrusterGaugeComponent,
    BatteryGaugeComponent,
    SlideSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ViewportModule,
    Ng5SliderModule,
    NgxGaugeModule
  ],
  providers: [WebsocketService, RovStateService],
  bootstrap: [AppComponent],
  exports: [
    AppComponent,
    SwitchesComponent,
    LinearGaugeComponent,
    RadialGaugeComponent,
  ]
})
export class AppModule {
}
