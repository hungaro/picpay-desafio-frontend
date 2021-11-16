import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavbarComponent } from './m-navbar.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenService } from 'src/app/core/token/token.service';
import { User } from 'src/app/models/user';

describe('MNavbarComponent', () => {
  let component: MNavbarComponent;
  let fixture: ComponentFixture<MNavbarComponent>;
  let service: TokenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MNavbarComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [ TokenService ]
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

    fixture = TestBed.createComponent(MNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
