import {TestBed} from '@angular/core/testing';

import {Widget1ServiceService} from './widget1-service.service';

describe('Widget1ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Widget1ServiceService = TestBed.get(Widget1ServiceService);
    expect(service).toBeTruthy();
  });
});
