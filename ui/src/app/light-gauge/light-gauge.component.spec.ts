import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightGaugeComponent } from './light-gauge.component';
import {DECLARATIONS} from '../app.declarations';
import {IMPORTS} from '../app.imports';

describe('LightGaugeComponent', () => {
  let component: LightGaugeComponent;
  let fixture: ComponentFixture<LightGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS, imports: IMPORTS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
