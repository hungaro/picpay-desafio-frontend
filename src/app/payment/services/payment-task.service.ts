import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetPaymentTaskParams } from '../models/get-payment-task-params.model';
import { GetPaymentTask } from '../models/get-payment-task.model';
import { PaymentTask } from '../models/payment-task.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTaskService {
  private apiUrl = '/tasks';
  constructor(private api: ApiService) {}

  getPaymentTaskList(params: GetPaymentTaskParams): Observable<GetPaymentTask> {
    return this.api
      .get<PaymentTask[]>(this.apiUrl, params, { showLoading: true, defaultErrorHandling: true, fullResponse: true })
      .pipe(
        map((resp: HttpResponse<PaymentTask[]>) => {
          return { list: resp.body, total: Number(resp.headers.get('X-Total-Count')) } as GetPaymentTask;
        })
      );
  }

  savePaymentTask(paymentTask: PaymentTask): Observable<PaymentTask> {
    return this.api.post<PaymentTask>(this.apiUrl, paymentTask, { showLoading: true, defaultErrorHandling: true });
  }

  updatePaymentTask(paymentTask: PaymentTask): Observable<PaymentTask> {
    return this.api.patch<PaymentTask>(`${this.apiUrl}/${paymentTask.id}`, paymentTask, { showLoading: true, defaultErrorHandling: true });
  }

  deletePaymentTask(id: number): Observable<null> {
    return this.api.delete(`${this.apiUrl}/${id}`, { showLoading: true, defaultErrorHandling: true });
  }
}
