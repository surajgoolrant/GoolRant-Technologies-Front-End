import { TestBed } from '@angular/core/testing';

import { ScrollpageService } from './scrollpage.service';

describe('ScrollpageService', () => {
  let service: ScrollpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
