import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService, private router: Router) {
  }

  public get isAuthenticate(): any {
      return  window.localStorage.getItem('token');
  }

  login(_email: string, _password: string){
    const endpoint = 'account';
    const route = this.apiService.url + endpoint;

    return this.apiService
      .get$(route)
      .toPromise()
      .then(data => {
        const {email, password} = data[0];
        let randomNum = Math.floor(Math.random() * 500000) + 1;
        
        if(_email === email && _password === password){
          window.localStorage.setItem('token', `user_${randomNum.toString()}`);
          window.localStorage.setItem('user', JSON.stringify(data));
          return data;
        }
        
        return {error: true, message: 'Usuário ou senha inválidos'};
      });
  }

  logout(){
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }


}
