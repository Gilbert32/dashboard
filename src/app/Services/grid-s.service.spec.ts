import { TestBed } from '@angular/core/testing';

import { GridSService } from './grid-s.service';

describe('GridSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridSService = TestBed.get(GridSService);
    expect(service).toBeTruthy();
  });
});
