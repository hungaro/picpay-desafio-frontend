import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

const OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  parseObject(task: Task): Task {
    task.username = task.name.replace(/\s/g,'').toLowerCase()
    task.image = task?.image ?? "";
    task.date = new Date(task.date);
    return task;
  }

  findById(id: number): Observable<Task> {
    return this.http.get<Task>(`${API_URL}/tasks/${id}`);
  }

  listAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${API_URL}/tasks`);
  }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>(`${API_URL}/tasks`, JSON.stringify(this.parseObject(task)), OPTIONS)
  }

  update(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${API_URL}/tasks/${task.id}`, JSON.stringify(this.parseObject(task)), OPTIONS)
  }

  delete(id: number): Observable<Task> {
    return this.http.delete<Task>(`${API_URL}/tasks/${id}`);
  }

}
