import { TestBed } from '@angular/core/testing';

import { TypeOfErrorService } from './type-of-error.service';

describe('TypeOfErrorService', () => {
  let service: TypeOfErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
