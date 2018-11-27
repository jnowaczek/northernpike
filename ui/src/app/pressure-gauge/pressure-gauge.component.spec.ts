import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureGaugeComponent } from './pressure-gauge.component';
import {DECLARATIONS} from '../app.declarations';
import {IMPORTS} from '../app.imports';

describe('PressureGaugeComponent', () => {
  let component: PressureGaugeComponent;
  let fixture: ComponentFixture<PressureGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS, imports: IMPORTS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
