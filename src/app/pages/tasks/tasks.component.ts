import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PaymentModel } from 'src/app/shared/models/payment.model';
import { PaymentService } from 'src/app/shared/services/payment.service';
import * as moment  from "moment";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  paymentForm: FormGroup;
  //Pagination
  totalItems = 0;
  activePage: number;
  page = 1;
  itensPerPage: number = 30;
  payments: PaymentModel[] = [];

  constructor(
    private modalService: ModalService,
    private paymentService: PaymentService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getPaymentsList();
    this.paymentForm = this.fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      date: ['', [Validators.required]],
      title: ['', [Validators.required]]
    });
  }

  get getControl(){
    return this.paymentForm.controls;
  }

  addedPayment(id){
    this.paymentForm.reset();
    this.modalService.open(id);
  }

  openFilter(){}

  getPaymentsList(){
    this.paymentService.fetchPayments(1, 10).then(data => {  
      this.payments = data; 
    }).catch(error => console.log(error));
  }

  editPayment({name, value, date, title}){
      this.modalService.open('modal-add-payment');
      this.paymentForm.setValue({
        name,
        value,
        date: moment(date).format('YYYY-MM-DD'),
        title,
      })
  }

  removePayment(payment){
    console.log(payment);        
  }

  savePayment(){

  }
}
