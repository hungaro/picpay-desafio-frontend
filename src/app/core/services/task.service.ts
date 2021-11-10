import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { SortDirection } from '@angular/material/sort';

import { Observable } from 'rxjs';

import { format } from 'date-fns';

import { Utils } from '@core/utils/utils';

import { environment } from '@environments/environment';

import { SearchFilter } from '@pages/home/components/search-filter/search-filter.component';

import { Task } from '@models/task.model';

@Injectable()
export class TaskService {
  private url: string;

  constructor(private readonly http: HttpClient) {
    this.url = `${environment.baseUrl}${environment.endpoints.task}`;
  }

  retrieveTasks(
    sortActive: string,
    sortDirection: SortDirection,
    page: number,
    pageSize: number,
    filters: SearchFilter,
  ): Observable<HttpResponse<Task[]>> {
    let params = new HttpParams();
    params = params.append('_sort', sortActive);
    params = params.append('_order', sortDirection);
    params = params.append('_page', page);
    params = params.append('_limit', pageSize);

    Object.keys(filters ?? {}).forEach((filterName: string) => {
      const filterValue = filters[filterName];

      if (filterName === 'date' && filterValue) {
        params = params.append('q', format(new Date(filterValue), 'yyyy-MM-dd'));
      } else if (filterValue) {
        params = params.append(filterName, filterValue);
      }
    });

    return this.http.get<Task[]>(this.url, {
      params,
      observe: 'response',
    });
  }

  retrieveTask(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${taskId}`);
  }

  createTask(task: Omit<Task, 'id'>): Observable<Task> {
    return this.http.post<Task>(this.url, Utils.generatePaymentData(task));
  }

  deleteTask(taskId: number): Observable<{}> {
    return this.http.delete<{}>(`${this.url}/${taskId}`);
  }

  updateAllTask(taskId: number, data: Omit<Task, 'id'>): Observable<Task> {
    return this.http.put<Task>(`${this.url}/${taskId}`, Utils.generatePaymentData(data));
  }

  updateTask(taskId: number, data: Omit<Partial<Task>, 'id'>): Observable<Task> {
    return this.http.patch<Task>(`${this.url}/${taskId}`, data);
  }
}
