import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {

  title: string = ''
  task: Task;

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  taskForm: FormGroup = this.formBuilder.group({
    name: "",
    value: "",
    date: "",
    title: ""  
  });

  constructor(@Inject(MAT_DIALOG_DATA) private config: any, private dialog: MatDialogRef<PaymentDialogComponent>, private formBuilder: FormBuilder) {
    this.title = config.title;
    this.task = config.task;
  }

  ngOnInit(): void {
  }

  confirm(){
    this.dialog.close({...this.taskForm.value});
  }

}
