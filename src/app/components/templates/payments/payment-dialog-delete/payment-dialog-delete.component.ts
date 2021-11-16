import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'payment-dialog-delete',
  templateUrl: './payment-dialog-delete.component.html',
  styleUrls: ['./payment-dialog-delete.component.scss']
})
export class PaymentDialogDeleteComponent implements OnInit {

  title: string = ''
  task: Task;

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  taskForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private config: any, private dialog: MatDialogRef<PaymentDialogDeleteComponent>, private formBuilder: FormBuilder) {
    this.title = config.title;
    this.task = config.task;

    let isEdit = this.task.id !== undefined && this.task.id !== 0;

    this.taskForm = this.formBuilder.group({
      name: [isEdit ? this.task.name : "", Validators.required],
      value: [isEdit ? this.task.value : "", Validators.required],
      date: [isEdit ? this.task.date.toISOString : "", Validators.required],
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
      task: this.task
    }
    this.dialog.close(data);
  }

}
