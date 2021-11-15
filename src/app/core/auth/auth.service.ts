import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../../../environments/environment';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService, private router: Router) {}

  authenticate(username: string, password: string) {
    return this.http.get<User[]>(
      `${API_URL}/account?email=${username}&password=${password}`
    );
  }

  logout(){
    this.tokenService.removeToken();
    this.router.navigate(['login']);
  }
}
