import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSliderComponent } from './light-slider.component';
import {DECLARATIONS} from '../app.declarations';
import {IMPORTS} from '../app.imports';

describe('LightSliderComponent', () => {
  let component: LightSliderComponent;
  let fixture: ComponentFixture<LightSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS, imports: IMPORTS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
