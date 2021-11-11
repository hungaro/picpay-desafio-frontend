import { TaskService } from './../../services/task/task.service';
import { Ipayment } from './../../../shared/models/ipayment';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksForTableResolver implements Resolve<HttpResponse<Ipayment[]>> {

  constructor(
    private taskService: TaskService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HttpResponse<Ipayment[]>>  {

    const search: string = route.queryParams.search ?? '';

    return this.taskService.get(this.createQueryParams(route));
  }

  createQueryParams(route: ActivatedRouteSnapshot): HttpParams {

    let params = new HttpParams();
    params = params.set('_limit', route.queryParams.limit ?? 5);
    params = params.set('_page', route.queryParams.page ?? 1);
    
    if(route.queryParams.search) {
      params = params.set('name_like', route.queryParams.search);
    }

    if(route.queryParams.title) {
      params = params.set('title_like', route.queryParams.title);
    }
  
    if(route.queryParams.value) {
      params = params.set('value', route.queryParams.value);
    }

    if(route.queryParams.date) {
      params = params.set('date_like', route.queryParams.date);
    }

    if(route.queryParams.payed) {
      params = params.set('isPayed', route.queryParams.payed);
    }

    if(route.queryParams.sort && route.queryParams.order) {
      params = params.set('_sort', route.queryParams.sort);
      params = params.set('_order', route.queryParams.order);

    }
    
    return params;
  }
}
