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

<<<<<<< HEAD
  get(): Observable<Ipayment[]> {
    return this.http.get<Ipayment[]>(`${this.url_api}`)
  }

  post(payment: Ipayment): Observable<Ipayment> {
    return this.http.post<Ipayment>(`${this.url_api}`, payment);
  }

  put(payment: Ipayment): Observable<Ipayment> {
    return this.http.put<Ipayment>(`${this.url_api}/${payment.id}`, payment);
  }

  delete(id: number): Observable<Ipayment> {
    return this.http.delete<Ipayment>(`${this.url_api}/${id}`);
  }
=======
  post(payment: Ipayment): Observable<Ipayment> {
    return this.http.post<Ipayment>(`${this.url_api}`, payment);
  }
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520
}
