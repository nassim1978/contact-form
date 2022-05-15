import { TestBed } from '@angular/core/testing';

import { NassimContactFormService } from './nassim-contact-form.service';

describe('NassimContactFormService', () => {
  let service: NassimContactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NassimContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
