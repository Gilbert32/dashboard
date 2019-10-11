import { TestBed } from '@angular/core/testing';

import { Widget3SService } from './widget3-s.service';

describe('Widget3SService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Widget3SService = TestBed.get(Widget3SService);
    expect(service).toBeTruthy();
  });
});
