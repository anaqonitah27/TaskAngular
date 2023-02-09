import { TestBed } from '@angular/core/testing';

import { BublechartService } from './bublechart.service';

describe('BublechartService', () => {
  let service: BublechartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BublechartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
