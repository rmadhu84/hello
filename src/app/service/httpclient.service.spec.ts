import { TestBed } from '@angular/core/testing';

import { HTTPclientService } from './httpclient.service';

describe('HTTPclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HTTPclientService = TestBed.get(HTTPclientService);
    expect(service).toBeTruthy();
  });
});
