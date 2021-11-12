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
        return this.http.get<IPayment[]>(urlConfig.urlPayment, { params })
    }

    addPayment({ value, user, title }): Observable<IPayment> {
        
        const body = {
            name: user,
            username: `${user.replace(/(\s)/g, '').toLowerCase()}`,
            title,
            value,
            date: new Date().toISOString(),
            isPayed: false
        }

        return this.http.post<IPayment>(urlConfig.urlPayment, body)
    }

    payUnPay({ isPayed, id }): Observable<IPayment> {
        return this.http.patch<IPayment>(urlConfig.urlPaymentPatch.replace(':id', id), { isPayed })
    }

    getPaymentById(id: number): Observable<IPayment> {
        return this.http.get<IPayment>(
            urlConfig.urlGetPaymentById.replace(':id', id.toString())
        )
    }

    remove(id: number): Observable<{}> {
        return this.http.delete<IPayment>(
            urlConfig.urlPaymentPatch.replace(':id', id.toString())
        )
    }

    edit(payment: IPayment): Observable<IPayment> {
        let id = payment.id.toString();
        delete payment.id;
        return this.http.put<IPayment>(
            urlConfig.urlPaymentPatch.replace(':id', id),
            payment
        )
    }
}