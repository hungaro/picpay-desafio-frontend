import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { Environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';
import { SnackbarService } from './snackbar.service';

export interface ApiOptions {
  showLoading?: boolean;
  defaultErrorHandling?: boolean;
  fullResponse?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = Environment.apiUrl;

  constructor(private http: HttpClient, private loading: LoadingService, private snackBar: SnackbarService) {}

  get<T = any>(path: string, params: any = {}, options: ApiOptions = {}): Observable<T | HttpResponse<T>> {
    let observe = !!options?.fullResponse ? 'response' : 'body';
    return this.http
      .get<T>(`${this.apiUrl}${path}`, {
        params: new HttpParams({ fromObject: params }),
        observe: observe as 'response'
      })
      .pipe(this.handleDefaultOptions(options));
  }

  post<T = any>(path: string, body: any, options: ApiOptions = {}): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${path}`, body).pipe(this.handleDefaultOptions(options));
  }

  put<T = any>(path: string, body: any, options: ApiOptions = {}): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${path}`, body).pipe(this.handleDefaultOptions(options));
  }

  delete<T = any>(path: string, options: ApiOptions = {}): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${path}`).pipe(this.handleDefaultOptions(options));
  }

  patch<T = any>(path: string, body: any, options: ApiOptions = {}): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${path}`, body).pipe(this.handleDefaultOptions(options));
  }

  handleDefaultOptions(options: ApiOptions): <T>(source: Observable<T>) => Observable<T> {
    const timeoutTime = 60000;

    if (options.showLoading) {
      this.loading.show();
    }

    return <T>(source: Observable<T>) =>
      source.pipe(
        timeout(timeoutTime),
        catchError((error: HttpErrorResponse) => {
          console.log('Request Error', error);
          switch (error.status) {
            case 404:
              this.snackBar.showError('Registro não encontrado.');
              break;
            default:
              this.snackBar.showError('Ocorreu um erro inesperado.');
          }
          return throwError(error);
        }),
        finalize(() => {
          if (options.showLoading) {
            this.loading.hide();
          }
        })
      );
  }
}
