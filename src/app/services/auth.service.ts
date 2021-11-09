import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { urlConfig } from "../config/url.config";
import { IAccount } from "../interfaces/account.interface";

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient
    ){ }

    login(): Observable<IAccount[]> {
        return this.http.get<IAccount[]>(urlConfig.urlAuthenticate);
    }
}