import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'payment-delete',
  templateUrl: './payment-delete.component.html',
  styleUrls: ['./payment-delete.component.scss']
})
export class PaymentDeleteComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

  delete(task: Task){
    console.log(task)
  }

}
