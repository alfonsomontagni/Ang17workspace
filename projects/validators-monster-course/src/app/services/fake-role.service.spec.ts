import { TestBed } from '@angular/core/testing';

import { FakeRoleService } from './fake-role.service';

describe('FakeRoleService', () => {
  let service: FakeRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
