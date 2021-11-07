import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from './../../../../core/services/snackbar/snackbar.service';
import { TaskService } from './../../../../core/services/task/task.service';
import { Ipayment } from './../../../../shared/models/ipayment';
import { TextsButton } from './../../../../shared/enums/texts-button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.scss']
})
export class FormPaymentComponent implements OnInit {
  
  public paymentForm!: FormGroup;
  public txtBtnCancel: string = TextsButton.cancel;
  public txtBtnSave: string = TextsButton.save;
  public disableBtnSave!: boolean;
  @Input() payment!: Ipayment;
  @Output() action = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.validationForm();
  }

  validationForm() {
    this.paymentForm = this.fb.group({
      userName: [this.payment?.name ?? '', [Validators.required]],
      value: [this.payment?.value ?? '', [Validators.required]],
      date: [this.payment?.date ?? '', [Validators.required]],
      title: [this.payment?.title ?? '']
    })
  }

  cancel(): void {
    this.action.emit(false);
  }

  save(): void {
    if(this.paymentForm.valid) {
      this.taskService.post(this.createPayment()).subscribe((payment: Ipayment) => {
        this.snackbar.openSuccess(MessagesSnackbar.successfully_added);
        this.action.emit(true);
      },
      error => {
        this.snackbar.openError(MessagesSnackbar.server_error);
      })
    }
  }

  createPayment(): Ipayment {
    const payment: Ipayment = {
      name: this.paymentForm?.get('userName')?.value,
      username: this.payment?.username ?? this.paymentForm?.get('userName')?.value, 
      title: this.paymentForm?.get('title')?.value,
      value: this.paymentForm?.get('value')?.value,
      date: new Date(this.paymentForm?.get('date')?.value).toISOString(),
      image: this.payment?.image ?? null, 
      isPayed: this.payment?.isPayed ?? false
    }

    return payment;
  }
}
