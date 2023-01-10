import { TestBed } from '@angular/core/testing';

import { QrloggerService } from './qrlogger.service';

describe('QrloggerService', () => {
  let service: QrloggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrloggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
