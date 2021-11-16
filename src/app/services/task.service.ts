import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

const OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  parseObject(task: Task): Task {
    task.name = task?.name ?? task.username;
    task.image = task?.image ?? "";
    task.date = new Date(task.date);
    return task;
  }

  listAll(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:3000/tasks");
  }

  save(task: Task): Observable<Task> {
    console.log(JSON.stringify(this.parseObject(task)))
    return this.http.post<Task>("http://localhost:3000/tasks", JSON.stringify(this.parseObject(task)), OPTIONS)
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(`http://localhost:3000/tasks/${task.id}`, JSON.stringify(this.parseObject(task)), OPTIONS)
  }

  delete(id: number): Observable<Task> {
    return this.http.delete<Task>(`http://localhost:3000/tasks/${id}`);
  }

}
