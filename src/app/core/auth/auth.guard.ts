import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate() {
    if (this.tokenService.hasToken()) {
      return true;
    } else {
      this.tokenService.removeToken();
      this.router.navigate(['login']);
      return false;
    }
  }
}
