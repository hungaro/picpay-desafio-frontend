import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { UserAccount } from '../models/user-account.model';
import { ApiService } from './api.service';

interface UserAuthentication {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/account';
  private userData: BehaviorSubject<UserAccount> = new BehaviorSubject(null);
  private authenticated = false;

  constructor(private api: ApiService) {}

  authenticate(authentication: UserAuthentication): Observable<UserAccount> {
    return this.api
      .get<UserAccount[]>(this.apiUrl, authentication, {
        defaultErrorHandling: false,
        showLoading: false
      })
      .pipe(
        map(user => {
          if (!!user?.length) {
            this.authenticated = true;
            this.userData.next(user[0]);
            return user[0];
          }
          throw new HttpErrorResponse({ status: 404, error: 'Email ou senha incorretos' });
        })
      );
  }

  isAuthenticated(): Observable<boolean> {
    return of(this.authenticated).pipe(
      mergeMap(() => this.getUserData()),
      map(userData => !!userData)
    );
  }

  getUserData = (): Observable<UserAccount> => this.userData.asObservable();
}
