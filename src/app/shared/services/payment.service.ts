import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private apiService: ApiService) { }

  fetchPayments(page, total){
    const endpoint = `tasks?_page=${page}&_limit=${total}`;
    const route = this.apiService.url + endpoint;

    return this.apiService
      .get$(route)
      .toPromise()
      .then(data => {
        return data;
      });
  }

}
