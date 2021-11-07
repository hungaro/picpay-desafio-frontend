import { TaskService } from './../../services/task/task.service';
import { Ipayment } from './../../../shared/models/ipayment';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksForTableResolver implements Resolve<Ipayment[]> {

  constructor(
    private taskService: TaskService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ipayment[]> {
    return this.taskService.get();
  }
}
