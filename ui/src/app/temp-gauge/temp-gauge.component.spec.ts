import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TempGaugeComponent} from './temp-gauge.component';
import {DECLARATIONS} from '../app.declarations';
import {IMPORTS} from '../app.imports';

describe('TempGaugeComponent', () => {
  let component: TempGaugeComponent;
  let fixture: ComponentFixture<TempGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS, imports: IMPORTS
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
