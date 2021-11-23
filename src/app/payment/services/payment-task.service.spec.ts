import { TestBed } from '@angular/core/testing';

import { PaymentTaskService } from './payment-task.service';

describe('PaymentTaskService', () => {
  let service: PaymentTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
