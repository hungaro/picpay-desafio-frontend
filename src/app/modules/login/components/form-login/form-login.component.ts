import { SnackbarService } from './../../../../core/services/snackbar/snackbar.service';
import { TextsButton } from './../../../../shared/enums/texts-button';
import { AccountService } from './../../../../core/services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/iuser';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public disableBtn: boolean = false;
  public txtBtn: string = TextsButton.enter;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountService: AccountService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.validationForm();
  }

  validationForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login(): void {
    if(this.loginForm.valid) {

      this.disableBtn = true;
      this.txtBtn = TextsButton.accessing;

      this.accountService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
        .subscribe((result: Iuser[]) => {
          this.router.navigate(['payment'])
        },
        (error: Error) => {
          this.validationError(error);
      });
    }
  }

  validationError(error: Error): void {
    this.disableBtn = false;
    this.txtBtn = TextsButton.enter;

    switch (error.message) {
      case '404':
        this.snackbar.openError(MessagesSnackbar.unauthorized_login_error);
        break;
      default:
        this.snackbar.openError(MessagesSnackbar.server_error);
        break;
    }
  }
}
