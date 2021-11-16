import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private tokenService: TokenService) {}

  getUserProfile(): User{
    if(this.tokenService.getToken()) {
      return this.tokenService.getToken().value;  
    }
    return null;
  }
}
