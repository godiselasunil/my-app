import { TestBed } from '@angular/core/testing';

import { CalctaskService } from './calctask.service';

describe('CalctaskService', () => {
  let service: CalctaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalctaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
