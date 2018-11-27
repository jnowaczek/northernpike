import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CameraviewComponent} from './cameraview.component';
import {DECLARATIONS} from '../../app.declarations';
import {IMPORTS} from '../../app.imports';

describe('CameraviewComponent', () => {
  let component: CameraviewComponent;
  let fixture: ComponentFixture<CameraviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,

      imports: IMPORTS
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
