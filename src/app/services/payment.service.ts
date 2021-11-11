import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { urlConfig } from "../config/url.config";
import { IPayment } from "../interfaces/payment.interface";

@Injectable()
export class PaymentService {
    constructor(
        private http: HttpClient
    ){}

    getPaymentList({ _limit, username, _page }): Observable<IPayment[]> {
        let params = new HttpParams()
            .set('_limit', _limit)
            .set('_page', _page)
        
        if(username){
            params = params.set('username_like', username);
        }
        return this.http.get<IPayment[]>(urlConfig.urlPaymentList, { params })
    }
}