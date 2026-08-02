import { TestBed } from '@angular/core/testing';

import { BuildpizzaService } from './buildpizza.service';

describe('BuildpizzaService', () => {
  let service: BuildpizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildpizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
