import { TestBed } from '@angular/core/testing';

import { JsonService } from './json.service';

describe('HeroService', () => {
  let service: JsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
