import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';

import { PaymentEditComponent } from './payment-edit.component';

describe('PaymentEditComponent', () => {
  let component: PaymentEditComponent;
  let fixture: ComponentFixture<PaymentEditComponent>;
  let service: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentEditComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
        TaskService
      ],
      imports: [ HttpClientModule, MatSnackBarModule ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(TaskService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});









// describe('PaymentDeleteComponent', () => {
//   let component: PaymentDeleteComponent;
//   let fixture: ComponentFixture<PaymentDeleteComponent>;
//   let service: TaskService;

//   beforeEach(() => {
    
//     TestBed.configureTestingModule({
//       imports: [ HttpClientModule, MatSnackBarModule],
//       providers: [ TaskService ],
//       declarations: [ PaymentDeleteComponent ]
//     });

//     fixture = TestBed.createComponent(PaymentDeleteComponent);
//     component = fixture.componentInstance;
//     service = TestBed.inject(TaskService);

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });