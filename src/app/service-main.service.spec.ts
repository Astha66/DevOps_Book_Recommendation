import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ServiceMainService } from './service-main.service';

describe('ServiceMainService', () => {
  let service: ServiceMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]
    });
    service = TestBed.inject(ServiceMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
