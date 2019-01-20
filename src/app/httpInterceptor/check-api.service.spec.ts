import { TestBed } from '@angular/core/testing';

import { CheckApiService } from './check-api.service';

describe('CheckApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckApiService = TestBed.get(CheckApiService);
    expect(service).toBeTruthy();
  });
});
