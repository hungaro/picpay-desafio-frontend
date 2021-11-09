import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    private snackBar: MatSnackBar
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
            this.openSnackBar('Você não possui permissão de acesso', 'Ok')
            return
          }

          if(this.hasAccessByEmail && this.hasAccessByPwd){
            this.snackBar.dismiss();
            sessionStorage.setItem('auth', JSON.stringify(auth));
            this.router.navigate(['/payments']);
            return;
          }

          
          this.openSnackBar('Email e/ou senha estão incorretos', 'Ok')
        },
        error: (err) => {
          this.loading = false;
          console.error(err);
          this.openSnackBar('Encontramos um erro inesperado', 'Ok')
        }
      })
      
    }
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action);
  }
}
