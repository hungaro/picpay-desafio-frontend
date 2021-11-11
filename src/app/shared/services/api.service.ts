import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

/**
 * Service that provides some simplified methods to use the Back-end API
 *
 * @export
 * @class ApiService
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string;
  constructor(private http: HttpClient) {}

  /**
   * Send a get request to Back-end API
   *
   * @param {*} route
   * @param {*} params
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  get$(route, params?: any): Observable<any> {
    return this.http.get(route, { params });
  }

  /**
   * Send a post request to Back-end API to add new itens
   *
   * @param {*} route
   * @param {*} params
   * @returns {Observable<any>}
   * @memberof ApiService
   */
   post$(route, params): Observable<any> {
    return this.http.post(route, params);
  }

  /**
   * Send a update request to Back-end API
   *
   * @param {*} route
   * @param {*} params
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  update$(route, params): Observable<any> {
    return this.http.put(route, params);
  }

  /**
   * Send a delete request to Back-end API
   *
   * @param {*} route
   * @returns {Observable<any>}
   * @memberof ApiService
   */
  delete$(route): Observable<any> {
    return this.http.delete(route);
  }

}
