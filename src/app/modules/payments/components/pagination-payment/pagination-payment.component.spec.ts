import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPaymentComponent } from './pagination-payment.component';

describe('PaginationPaymentComponent', () => {
  let component: PaginationPaymentComponent;
  let fixture: ComponentFixture<PaginationPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
