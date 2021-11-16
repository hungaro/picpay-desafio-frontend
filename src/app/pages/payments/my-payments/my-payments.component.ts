import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/core/snackbar/snackbar.service';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-my-payments',
  templateUrl: './my-payments.component.html',
  styleUrls: ['./my-payments.component.scss']
})
export class MyPaymentsComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private http: HttpClient, private snackbarService: SnackbarService, private taskService: TaskService) {}

  ngOnInit(): void {
    
    this.taskService.listAll()
    .subscribe( 
      (data) => this.tasks = data
      ,
      (err) => {
        console.log(err);
        this.snackbarService.error("Erro ao buscar meus pagamentos")
      }
    );
  }

}
