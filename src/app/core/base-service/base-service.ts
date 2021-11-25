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
}