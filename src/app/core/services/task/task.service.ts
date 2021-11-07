import { Ipayment } from './../../../shared/models/ipayment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.url_api;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public url_api = `${API}/tasks`

  constructor(
    private http: HttpClient
  ) { }

  post(payment: Ipayment): Observable<Ipayment> {
    return this.http.post<Ipayment>(`${this.url_api}`, payment);
  }
}
