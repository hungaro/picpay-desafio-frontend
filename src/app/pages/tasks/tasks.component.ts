import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { PaymentModel } from 'src/app/shared/models/payment.model';
import { PaymentService } from 'src/app/shared/services/payment.service';
import * as moment  from "moment";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  paymentForm: FormGroup;
  paymentModel: PaymentModel = new PaymentModel();
  isNew: boolean = true;
  currPayment: any;
  //Pagination
  totalItems = 0;
  activePage: number;
  page = 1;
  itemsPerPage: number = 20;
  searchText: string; 

  payments: PaymentModel[] = [];

  constructor(
    private modalService: ModalService,
    private paymentService: PaymentService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getTotalPaymentsList();
    this.getPaymentsList(1);
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

  setPayment(payment?){
    this.modalService.open('modal-add-payment');
    if(payment){
      const {name, value, date, title} = payment;
      this.paymentForm.setValue({
        name,
        value,
        date: moment(date).format('YYYY-MM-DD'),
        title,
      });
      this.currPayment = payment;
      this.isNew = false;
    }else{
      this.paymentForm.reset();
      this.getControl.date.setValue(moment().format('YYYY-MM-DD'));
      this.isNew = true;
    }
  }

  openFilter(){}

  closeModal(){
    this.modalService.close('modal-add-payment');
    this.paymentForm.reset();
  }

  getTotalPaymentsList(){
    this.paymentService.fetchTotalPayments().then(data => {  
      this.totalItems = data;
    }).catch(error => console.log(error));
  }

  getPaymentsList(e){
    this.page = e;
    this.paymentService.fetchPayments(this.page, this.itemsPerPage).then(data => {  
      this.payments = data;
      this.activePage = this.page;
    }).catch(error => console.log(error));
  }

  showByQuantity(quantity){
    this.itemsPerPage = quantity;
    this.getPaymentsList(this.page);
  }

  removePayment(payment){
    console.log(payment);        
  }

  savePayment(){    
    const {
      name,
      value,
      date,
      title
    } = this.getControl;

    this.paymentModel['name'] = name.value;
    this.paymentModel['value'] = value.value;
    this.paymentModel['date'] = `${moment(date.value).format("YYYY-MM-DDT")}${moment().hours()}:${moment().minutes()}:${moment().seconds()}Z`;
    this.paymentModel['title'] = title.value;
    this.paymentModel['username'] = this.createUsername(name.value);

    if(this.isNew){
      this.paymentService.savePayment(this.paymentModel).then(data => {
        Swal.fire({
          text: `Pagamento adicionado com sucesso`,
          icon: 'success',
        }).then(e => {
          this.modalService.close('modal-add-payment');
          this.getPaymentsList(this.page);
          this.getTotalPaymentsList();
        })
      })
    }else{
      this.currPayment = {
        date: `${moment(this.getControl.date.value).format("YYYY-MM-DDT")}${moment().hours()}:${moment().minutes()}:${moment().seconds()}Z`,
        ...this.currPayment,
        ...this.paymentForm.value
      }
      this.paymentService.updatePayment(this.currPayment, this.currPayment.id).then(data => {
        Swal.fire({
          text: `Pagamento atualizado com sucesso`,
          icon: 'success',
        }).then(e => {
          this.modalService.close('modal-add-payment');
          this.getPaymentsList(this.page);
        })
      })
    }        
  }

  createUsername(name){
    const [nome, sobrenome] = name.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ');
    return `${nome.slice(0, 1)}${sobrenome}`;
  }
}
