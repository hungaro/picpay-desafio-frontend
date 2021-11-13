import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) { }

  logoPath: string = '../../../assets/images/logo.png';
  email: string = null;
  pwd: string = null;
  loading: boolean = false;
  hasAccessByEmail: boolean = false;
  hasAccessByPwd: boolean = false;


  onSubmit(): void {
    if(this.email && this.pwd){
      this.loading = true;
      this.auth.login().subscribe({
        next: (auth) => {
          this.loading = false;
          this.hasAccessByEmail = !!(auth.find(auth => auth.email === this.email))
          this.hasAccessByPwd = !!(auth.find(auth => auth.password === this.pwd))

          if(!this.hasAccessByEmail && !this.hasAccessByPwd) {
            this.openSnackBar(
              this.translate.instant('errors.no-access'),
              this.translate.instant('common.ok')
            )
            return;
          }

          if( this.hasAccessByEmail && this.hasAccessByPwd ){
            this.snackBar.dismiss();
            sessionStorage.setItem('auth', JSON.stringify(auth.find(auth => auth.password === this.pwd)));
            this.router.navigate(['/payments']);
            return;
          }

          this.openSnackBar(
            this.translate.instant('common.email-or-pwd-wrong'),
            this.translate.instant('common.ok')
          )
        },
        error: (err) => {
          this.loading = false;
          console.error(err);
          this.openSnackBar(
            this.translate.instant('errors.we-found-an-errors'),
            this.translate.instant('common.ok')
          )
        }
      })
      
    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action);
  }
}
