import { TestBed } from '@angular/core/testing';

import { HandleModaleHeaderService } from './handle-modale-header.service';

describe('HandleModaleHeaderService', () => {
  let service: HandleModaleHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleModaleHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
