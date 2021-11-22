import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private userData: Subject<UserAccount> = new Subject();

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
            this.userData.next(user[0]);
            return user[0];
          }
          throw new HttpErrorResponse({ status: 404, error: 'Email ou senha incorretos' });
        })
      );
  }

  getUserData = (): Observable<UserAccount> => this.userData.asObservable();
}
