import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/core/snackbar/snackbar.service';
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-my-payments',
  templateUrl: './my-payments.component.html',
  styleUrls: ['./my-payments.component.scss']
})
export class MyPaymentsComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private http: HttpClient, private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    
    this.http.get<Task[]>(
      `${API_URL}/tasks`
    )
    .subscribe( 
      (data) => {
        this.tasks = data;
      },
      () => {
        this.snackbarService.error("Erro ao buscar meus pagamentos")
      }
    );
  }

}
