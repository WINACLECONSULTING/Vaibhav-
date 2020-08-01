import { TestBed } from '@angular/core/testing';

import { GrpcmpsetupsrvService } from './grpcmpsetupsrv.service';

describe('GrpcmpsetupsrvService', () => {
  let service: GrpcmpsetupsrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpcmpsetupsrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
