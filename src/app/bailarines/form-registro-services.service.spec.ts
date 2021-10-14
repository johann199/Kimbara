import { TestBed } from '@angular/core/testing';

import { FormRegistroServicesService } from './form-registro-services.service';

describe('FormRegistroServicesService', () => {
  let service: FormRegistroServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRegistroServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
