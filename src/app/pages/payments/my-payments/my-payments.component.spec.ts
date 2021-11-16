import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskService } from 'src/app/services/task.service';

import { MyPaymentsComponent } from './my-payments.component';

describe('MyPaymentsComponent', () => {
  let component: MyPaymentsComponent;
  let fixture: ComponentFixture<MyPaymentsComponent>;
  let service: TaskService;

  beforeEach(() => {
    

    TestBed.configureTestingModule({
      imports: [ HttpClientModule, MatSnackBarModule],
      providers: [ TaskService ],
      declarations: [ MyPaymentsComponent ]
    });

    fixture = TestBed.createComponent(MyPaymentsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TaskService);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
