import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '@services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '@models/account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;

  hasError: boolean;

  returnUrl: string;

  showPassword: boolean;

  private unsubscribeAll$: Subject<any>;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) {
    this.setDefaults();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  login(): void {
    const { email, password } = this.loginForm.controls;

    this.hasError = false;

    this.authenticationService
      .login(email.value, password.value)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((account: Account) => {
        if (account) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.hasError = true;
          this.loginForm.get('email').setErrors({ incorrect: true });
          this.loginForm.get('password').setErrors({ incorrect: true });
        }
      });
  }

  private createLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private setDefaults(): void {
    this.loginForm = this.createLoginForm();
    this.hasError = false;
    this.returnUrl = this.route.snapshot.queryParams.returnUrl ?? '/';
    this.showPassword = false;

    this.unsubscribeAll$ = new Subject();
  }
}
