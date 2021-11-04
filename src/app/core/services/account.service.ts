import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { Account } from '@shared/models/account.model';

@Injectable()
export class AccountService {
  private endpoint: string;

  constructor(private readonly http: HttpClient) {
    this.endpoint = `${environment.baseUrl}${environment.endpoints.account}`;
  }

  retrieveAccount({ email, password }): Observable<Account> {
    const params = new HttpParams();
    params.append('email', email);
    params.append('password', password);

    return this.http.get<Account>(this.endpoint, { params });
  }
}
