import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.scss']
})
export class PaymentEditComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

  edit(task: Task){
    console.log(task);
  }

}
