import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPaymentsComponent } from './t-payments.component';

describe('TPaymentsComponent', () => {
  let component: TPaymentsComponent;
  let fixture: ComponentFixture<TPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
