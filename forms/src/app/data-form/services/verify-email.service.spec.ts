/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerifyEmailService } from './verify-email.service';

describe('Service: VerifyEmail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyEmailService]
    });
  });

  it('should ...', inject([VerifyEmailService], (service: VerifyEmailService) => {
    expect(service).toBeTruthy();
  }));
});
