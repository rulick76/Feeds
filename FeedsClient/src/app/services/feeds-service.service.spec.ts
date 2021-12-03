import { TestBed } from '@angular/core/testing';

import { FeedsService } from './feed-service.service';

describe('PlayersServiceService', () => {
  let service: FeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
