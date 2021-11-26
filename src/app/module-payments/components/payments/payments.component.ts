import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PaymentsService } from './service/payments.service';

import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Data } from '@angular/router';

var data;

function search(text: string, pipe: PipeTransform) {
  return data.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}

export class NewPayment {
  username: string;
  value: number;
  date: Date;
  title: string;
  id: number;
  image: string;
  isPayed: boolean;
  name: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  data: Observable<[]>;
  filter = new FormControl('');
  page = 0;
  pageSize = 5;
  totalPages;

  success = false;
  error = false;
  deleted = false;

  newPayment: NewPayment = new NewPayment();

  constructor(
    pipe: DecimalPipe,
    private modalService: NgbModal,
    private paymentsService: PaymentsService,
    ) {
    this.data = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit(): void {
    // verificar total de paginas
    this.paymentsService.get('').subscribe(res => {
      this.totalPages = res.length;
    })
    this.load();
  }

  openNewPayment(content){
    this.modalService.open(content, { centered: true }).result.then((result) => {
      if(result == 'save'){
        this.paymentsService.post(this.newPayment).subscribe( res => {
          this.load();
          this.newPayment = new NewPayment();
          this.msgReturn('success')
        }, error => { this.msgReturn('error')})
      }
    })
  }

  edit(value, content){
    this.newPayment = value;
    this.modalService.open(content).result.then((result) => {
      if(result == 'save'){
        this.paymentsService.put(this.newPayment).subscribe( res => {
          this.load();
          this.newPayment = new NewPayment();
          this.msgReturn('success')
        }, error => { this.msgReturn('error')})
      }
    })
  }

  delete(value){
    this.paymentsService.delete(value).subscribe(res => {
      this.load();
      this.modalService.open
      this.msgReturn('deleted')
    }, error => { this.msgReturn('error')})
  }

  load(){
    this.paymentsService.get(`?_page=${this.page}&_limit=${this.pageSize}`).subscribe(res => {
      this.data = res;
    })
  }

  msgReturn(value){
    if(value == 'success'){
      this.success = true;
      const timer = setTimeout(() => {
        this.success = false
     }, 3000);
     return
    } else if (value == 'deleted'){ 
      this.deleted = true;
      const timer = setTimeout(() => {
        this.deleted = false
     }, 3000);
     return }
    
  }

}


