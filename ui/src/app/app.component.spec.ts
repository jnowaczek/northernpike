import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {SwitchesComponent} from './switches/switches.component';
import {LinearGaugeComponent} from './linear-gauge/linear-gauge.component';
import {RadialGaugeComponent} from './radial-gauge/radial-gauge.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WebsocketService} from './websocket.service';
import {RovStateService} from './rovstate.service';
import {ViewportModule} from './viewport/viewport.module';
import {LightSliderComponent} from './light-slider/light-slider.component';
import {TempGaugeComponent} from './temp-gauge/temp-gauge.component';
import {PressureGaugeComponent} from './pressure-gauge/pressure-gauge.component';
import {ThrusterGaugeComponent} from './thruster-gauge/thruster-gauge.component';
import {BatteryGaugeComponent} from './battery-gauge/battery-gauge.component';
import {SlideSwitchComponent} from './slide-switch/slide-switch.component';
import {LightGaugeComponent} from './light-gauge/light-gauge.component';
import {Ng5SliderModule} from 'ng5-slider';
import {NgxGaugeModule} from 'ngx-gauge';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        SlideSwitchComponent,
        LightGaugeComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        ViewportModule,
        Ng5SliderModule,
        NgxGaugeModule
      ],
      providers: [WebsocketService, RovStateService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Northern Pike Control Panel'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Northern Pike Control Panel');
  }));
  it('should render title in a h3 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Northern Pike Control Panel');
  }));
});
