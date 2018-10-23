import {TestBed} from '@angular/core/testing';

import {RovStateService} from './rovstate.service';

describe('RovstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RovstateService = TestBed.get(RovstateService);
    expect(service).toBeTruthy();
  });
});
