import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';

import { PaymentAddComponent } from './payment-add.component';

describe('PaymentAddComponent', () => {
  let component: PaymentAddComponent;
  let fixture: ComponentFixture<PaymentAddComponent>;
  let service: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule, HttpClientModule, MatSnackBarModule, RouterTestingModule],
      providers: [ TaskService ],
      declarations: [ PaymentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(TaskService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
