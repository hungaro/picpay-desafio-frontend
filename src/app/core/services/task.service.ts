import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { Task } from '@models/task.model';

@Injectable()
export class TaskService {
  private url: string;

  constructor(private readonly http: HttpClient) {
    this.url = `${environment.baseUrl}${environment.endpoints.task}`;
  }

  retrieveTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  retrieveTask(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${taskId}`);
  }

  createTask(task: Omit<Task, 'id'>): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  deleteTask(taskId: number): Observable<{}> {
    return this.http.delete<{}>(`${this.url}/${taskId}`);
  }

  updateAllTask(taskId: number, data: Omit<Task, 'id'>): Observable<Task> {
    return this.http.put<Task>(`${this.url}/${taskId}`, data);
  }

  updateTask(taskId: number, data: Omit<Partial<Task>, 'id'>): Observable<Task> {
    return this.http.patch<Task>(`${this.url}/${taskId}`, data);
  }
}
