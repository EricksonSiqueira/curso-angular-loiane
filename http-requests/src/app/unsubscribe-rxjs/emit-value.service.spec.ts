/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmitValueService } from './emit-value.service';

describe('Service: EmitValue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitValueService]
    });
  });

  it('should ...', inject([EmitValueService], (service: EmitValueService) => {
    expect(service).toBeTruthy();
  }));
});
