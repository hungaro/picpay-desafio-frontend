import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private tokenService: TokenService) {}

  getUserProfile(): User{
    return this.tokenService.getToken().value;  
  }
}
