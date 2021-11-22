import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });
  passwordShow = false;
  loginError: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.form.valid) {
      this.loginError = null;
      this.authService.authenticate(this.form.value).subscribe(
        () => this.router.navigate(['/payment']),
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.status) {
            this.loginError = err.error;
          } else {
            this.loginError = 'Ocorreu um erro ao realizar o login, tente novamente mais tarde.';
          }
        }
      );
    }
  }
}
