import { TestBed } from '@angular/core/testing';

import { QueueManagementService } from './queue-management.service';

describe('QueueManagementService', () => {
  let service: QueueManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueueManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
