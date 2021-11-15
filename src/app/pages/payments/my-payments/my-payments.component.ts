import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-my-payments',
  templateUrl: './my-payments.component.html',
  styleUrls: ['./my-payments.component.scss']
})
export class MyPaymentsComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("MyPaymentsComponent")
    this.http.get(
      `${API_URL}/tasks`
    )
    .subscribe( 
      (data) => {

        console.log(data)
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
