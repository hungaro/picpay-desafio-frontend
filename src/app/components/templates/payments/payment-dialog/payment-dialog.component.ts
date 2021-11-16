import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  taskForm: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) private config: any, private dialog: MatDialogRef<PaymentDialogComponent>, private formBuilder: FormBuilder) {
    
    this.title = config.title;
    this.task = config.task;

    let isEdit = this.task.id !== undefined && this.task.id !== 0;

    this.taskForm = this.formBuilder.group({
      name: [isEdit ? this.task.name : "", Validators.required],
      value: [isEdit ? this.task.value : "", Validators.required],
      date: [isEdit ? new Date(this.task.date) : "", Validators.required],
      title: [isEdit ? this.task.title : "", Validators.required]
      // isPayed: this.data.edit ? this.payment.isPayed : "",   
    });

  }

  ngOnInit(): void {
  }

  cancel() {
    let data = {
      event: "cancel"
    }
    this.dialog.close(data);
  }

  confirm() {
    let data = {
      event: "confirm",
      task: { ...this.taskForm.value },
      taskId: this.task.id
    }
    
    this.dialog.close(data);
  }

}
