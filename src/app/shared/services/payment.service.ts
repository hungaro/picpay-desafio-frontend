import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentModel } from '../models/payment.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private apiService: ApiService) { }

  fetchPayments(page, total){
    const endpoint = `tasks?_sort=date&_order=desc&_page=${page}&_limit=${total}`;
    const route = this.apiService.url + endpoint;

    return this.apiService
      .get$(route)
      .toPromise()
      .then(data => {
        return data;
      });
  }
  fetchTotalPayments(){
    const endpoint = `tasks`;
    const route = this.apiService.url + endpoint;

    return this.apiService
      .get$(route)
      .toPromise()
      .then(data => {
        return data.length;
      });
  }

  savePayment(payment: PaymentModel){
    const endpoint = `tasks`;
    const route = this.apiService.url + endpoint;

    return this.apiService
      .post$(route, payment)
      .toPromise()
      .then(data => {
        return data;
      });
  }

  updatePayment(payment, paymentId){
    const endpoint = `tasks/${paymentId}`;
    const route = this.apiService.url + endpoint;

    return this.apiService
      .update$(route, payment)
      .toPromise()
      .then(data => {
        return data;
      });
  }

}
