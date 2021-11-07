import { Iuser } from './../../../shared/models/iuser';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { map } from 'rxjs/operators';

const API = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public url_api = `${API}/account`

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  get(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(`${this.url_api}`);
  }

  login(email: string, password: string): Observable<Iuser[] | string> {
    return this.http.get<Iuser[]>(`${this.url_api}?email=${email}&password=${password}&_limit=1`).pipe(
      map((users: Iuser[]) => {
        if(users.length > 0) {
          this.userService.saveUser(users[0]);
          return users;
        } else {
          throw new Error('404');
        }
      })
    );
  }
}

