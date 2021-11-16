import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDialogDeleteComponent } from './payment-dialog-delete.component';

describe('PaymentDialogDeleteComponent', () => {
  let component: PaymentDialogDeleteComponent;
  let fixture: ComponentFixture<PaymentDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDialogDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
