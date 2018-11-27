import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryGaugeComponent } from './battery-gauge.component';
import {DECLARATIONS} from '../app.declarations';
import {IMPORTS} from '../app.imports';

describe('BatteryGaugeComponent', () => {
  let component: BatteryGaugeComponent;
  let fixture: ComponentFixture<BatteryGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS, imports: IMPORTS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
