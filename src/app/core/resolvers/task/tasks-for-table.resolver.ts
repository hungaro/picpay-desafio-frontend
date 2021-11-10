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

    return params;
  }
}
