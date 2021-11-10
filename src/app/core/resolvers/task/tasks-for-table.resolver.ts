import { TaskService } from './../../services/task/task.service';
import { Ipayment } from './../../../shared/models/ipayment';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksForTableResolver implements Resolve<HttpResponse<Ipayment[]>> {

  constructor(
    private taskService: TaskService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HttpResponse<Ipayment[]>>  {
    const limit: number = route.queryParams.limit ?? 5;
    const page: number = route.queryParams.page ?? 1;
    const search: string = route.queryParams.search;

    return this.taskService.get(limit, page, search);
  }
}
