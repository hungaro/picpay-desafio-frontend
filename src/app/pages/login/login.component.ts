import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenService } from 'src/app/core/token/token.service';
import { User } from 'src/app/core/auth/user';
import { SnackbarService } from 'src/app/core/snackbar/snackbar.service';

import { environment } from '../../../environments/environment';

const APP_TITLE = environment.appTitle;
const APP_SUBTITLE = environment.appSubtitle;
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = APP_TITLE;
  subtitle: string = APP_SUBTITLE;

  constructor(private auth: AuthService, private tokenService: TokenService, private router: Router, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.snackbarService.warning('Você foi deslogado')
    this.tokenService.removeToken();
  }

  login(user: User){
    
    this.auth.authenticate(user.email, user.password)
      .subscribe(
        
        (data: User[]) => {

          if (data && data.length == 1){
            this.tokenService.setToken(data[0]);

            this.router.navigate(['my-payments']);

            this.snackbarService.success('Login realizado com sucesso')
          }
          else{
            this.snackbarService.error('Usuário ou senha inválidos')
          }
          
        },
        () => {
          this.snackbarService.error('Usuário ou senha inválidos')
        }
      )
  }

}
