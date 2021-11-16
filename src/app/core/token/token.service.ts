import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Item } from './item';

const KEY = 'key';

// Minutes * Seconds * Miliseconds
const EXPIRE_ON_15_MINUTES = 15 * 60 * 1000;

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor() { }

  hasToken(): boolean {
    if(this.getToken() == null){
      return false;
    }

    const now = new Date()
    
    if (now.getTime() > this.getToken().expiry) {

      window.localStorage.removeItem(KEY)
      return null
    }
    return true;
  }

  setToken(user: User): void {
    
    const now = new Date()
    
    const item: Item = {
      value: user,
      expiry: now.getTime() + EXPIRE_ON_15_MINUTES,
    }

    window.localStorage.setItem(KEY, btoa(JSON.stringify(item)));
  }


  getToken(): Item {
    const key = window.localStorage.getItem(KEY);
    
    if (!key) {
      return null
    }
    
    return JSON.parse(atob(key))

  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
