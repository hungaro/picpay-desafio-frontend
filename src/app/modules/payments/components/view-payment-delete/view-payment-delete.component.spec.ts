import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentDeleteComponent } from './view-payment-delete.component';

describe('ViewPaymentDeleteComponent', () => {
  let component: ViewPaymentDeleteComponent;
  let fixture: ComponentFixture<ViewPaymentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
