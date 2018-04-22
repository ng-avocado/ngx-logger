import { TestBed, inject } from '@angular/core/testing';

import { NgxLoggerService } from './ngx-logger.service';

describe('NgxLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLoggerService]
    });
  });

  it('should be created', inject([NgxLoggerService], (service: NgxLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
