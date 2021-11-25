import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PaymentsService } from './service/payments.service';

import * as moment from 'moment';

var data;

function search(text: string, pipe: PipeTransform) {
  return data.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
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

  constructor(
    pipe: DecimalPipe,
    private paymentsService: PaymentsService
    ) {
    this.data = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.paymentsService.get(`tasks?_page=${this.page}&_limit=${this.pageSize}`).subscribe(res => {
      console.log(res)
      this.data = res;
    })
  }

}


