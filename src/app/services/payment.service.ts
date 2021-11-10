import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { urlConfig } from "../config/url.config";
import { IPayment } from "../interfaces/payment.interface";

@Injectable()
export class PaymentService {
    constructor(
        private http: HttpClient
    ){}

    getPaymentList({ _limit }): Observable<IPayment[]> {

        return this.http.get<IPayment[]>(
            urlConfig.urlPaymentList.replace(':limit', _limit.toString())
        )
    }
}