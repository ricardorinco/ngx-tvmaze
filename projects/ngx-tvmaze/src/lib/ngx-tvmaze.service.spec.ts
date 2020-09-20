import { TestBed } from '@angular/core/testing';

import { NgxTvmazeService } from './ngx-tvmaze.service';

describe('NgxTvmazeService', () => {
  let service: NgxTvmazeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTvmazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
