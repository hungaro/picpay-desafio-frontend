import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  error: boolean = false;
  alert: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    
    ) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/payments')
  }

  login(email, senha){
    this.authenticationService.get('account').subscribe( res => {
      // O correto deveria ser uma troca de token armazenando no local storage e validando todas as rotas via guard
      debugger
      if(email.value && senha.value){
        if(res[0].password == senha.value && res[0].email == email.value){
          this.authenticationService.autorizeUser(true)
          this.router.navigateByUrl('/payments')
        } else {
          this.error = true
        }
      } else { this.alert = true }
      
    }, error => { this.error = true })
  }

}
