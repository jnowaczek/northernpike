import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSwitchComponent } from './slide-switch.component';
import {DECLARATIONS} from '../app.declarations';
import {IMPORTS} from '../app.imports';

describe('SlideSwitchComponent', () => {
  let component: SlideSwitchComponent;
  let fixture: ComponentFixture<SlideSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS, imports: IMPORTS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
