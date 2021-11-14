import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    return this.http.get<User[]>(
      `${API_URL}/account?email=${username}&password=${password}`
    );
  }
}
