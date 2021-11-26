import { HttpClient } from '@angular/common/http';  
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class BaseService {

    constructor(
        protected http: HttpClient,
        protected url: string
        ){   }

    public get(value): Observable<any> {
        return this.http
            .get(`${this.url}/${value}`)
            .pipe(map(data => data),
            catchError(err => {
                return throwError(err);
            }))
    }

    public post(value): Observable<any> {
        return this.http
            .post(`${this.url}`, value)
            .pipe(map(data => data),
            catchError(err => {
                return throwError(err);
            }))
    }
    public put(value): Observable<any> {
        return this.http
            .put(`${this.url}/${value.id}`, value)
            .pipe(map(data => data),
            catchError(err => {
                return throwError(err);
            }))
    }

    public delete(value): Observable<any> {
        return this.http
            .delete(`${this.url}/${value}`)
            .pipe(map(data => data),
            catchError(err => {
                return throwError(err);
            }))
    }
}