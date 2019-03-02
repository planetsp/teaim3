import { TestBed } from '@angular/core/testing';

import { DatabaseControlService } from './database-control.service';

describe('DatabaseControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseControlService = TestBed.get(DatabaseControlService);
    expect(service).toBeTruthy();
  });
});
