import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TokenService } from 'src/app/core/token/token.service';
import { User } from 'src/app/models/user';

import { PaymentDialogDeleteComponent } from './payment-dialog-delete.component';

describe('PaymentDialogDeleteComponent', () => {
  let component: PaymentDialogDeleteComponent;
  let fixture: ComponentFixture<PaymentDialogDeleteComponent>;
  let service: TokenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDialogDeleteComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        TokenService
      ],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TokenService);
    const user: User = {
      "id": 0,
      "name": "usuario",
      "email": "usuario@gmail.com",
      "password": "usuario",
      "image": "https://media-exp1.licdn.com/dms/image/C4E03AQGbap3ZobgZUw/profile-displayphoto-shrink_400_400/0/1625923136722?e=1642636800&v=beta&t=9ynkF58BE85008RbSfujuvO9lL8uEUlDSbOCD0nzzjI"
    };

    service.setToken(user);

    fixture = TestBed.createComponent(PaymentDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
