import { Iuser } from './../../../shared/models/iuser';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarioSubject = new BehaviorSubject<Iuser>({});
  private keyStorage = 'user';

  constructor() {
    if(this.isLoggedIn()) {
      this.insertUser();
    }
  }

  private insertUser() {
    const user: Iuser = JSON.parse(localStorage.getItem(this.keyStorage));
    this.usuarioSubject.next(user);
  }

  returnUser(): Observable<Iuser> {
    return this.usuarioSubject.asObservable();
  }

  saveUser(user: Iuser): void {
    localStorage.setItem(this.keyStorage, JSON.stringify(user));
    this.usuarioSubject.next(user);
  }

  logout(): void {
    localStorage.removeItem(this.keyStorage);
    this.usuarioSubject.next({});
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.keyStorage);
  }
}
