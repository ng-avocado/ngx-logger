import { TestBed, inject } from '@angular/core/testing';

import { NgxLogger } from './ngx-logger.service';

describe('NgxLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLogger]
    });
  });

  it('should be created', inject([NgxLogger], (service: NgxLogger) => {
    expect(service).toBeTruthy();
  }));
});
