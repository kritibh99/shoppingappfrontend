import { TestBed } from '@angular/core/testing';

import { RoleStoreServiceService } from './role-store-service.service';

describe('RoleStoreServiceService', () => {
  let service: RoleStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
