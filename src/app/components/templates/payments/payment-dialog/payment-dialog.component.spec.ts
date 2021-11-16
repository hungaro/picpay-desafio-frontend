import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TokenService } from 'src/app/core/token/token.service';
import { User } from 'src/app/models/user';

import { PaymentDialogComponent } from './payment-dialog.component';

describe('PaymentDialogComponent', () => {
  let component: PaymentDialogComponent;
  let fixture: ComponentFixture<PaymentDialogComponent>;
  let service: TokenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDialogComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {
          id: 0,
          date: null,
          image: '',
          isPayed: true,
          name: '',
          title: '',
          username: '',
          value: 1
        } },
        TokenService
      ]
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

    fixture = TestBed.createComponent(PaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
