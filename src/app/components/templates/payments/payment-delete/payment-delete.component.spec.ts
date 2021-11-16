import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';

import { PaymentDeleteComponent } from './payment-delete.component';

describe('PaymentDeleteComponent', () => {
  let component: PaymentDeleteComponent;
  let fixture: ComponentFixture<PaymentDeleteComponent>;
  let service: TaskService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, MatSnackBarModule, MatDialogModule, FormsModule, ReactiveFormsModule],
      providers: [ TaskService ],
      declarations: [ PaymentDeleteComponent ]
    });

    fixture = TestBed.createComponent(PaymentDeleteComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TaskService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
