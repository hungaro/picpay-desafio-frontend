import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { urlConfig } from "../config/url.config";
import { IAccount } from "../interfaces/account.interface";


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
        private http: HttpClient
    ){}

    edit(user: IAccount): Observable<IAccount> {
        let url = urlConfig.urlAccount.replace(':id', user.id.toString());
        return this.http.put<IAccount>(url, user);
    }
}