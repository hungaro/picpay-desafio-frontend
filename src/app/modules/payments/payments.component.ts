import { IdialogFilter } from './../../shared/models/idialog-filter';
import { Ipayment } from './../../shared/models/ipayment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  public payments!: Ipayment[];
  public limitSelect!: number;
  public currentPage!: number;
  public totalPayments: number;
  public search!: string;
  public filters!: IdialogFilter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.receivePayment();
  }

  receivePayment(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.limitSelect =  this.activatedRoute.snapshot.queryParams.limit > 0? Number(this.activatedRoute.snapshot.queryParams.limit) : 5;
      this.currentPage = this.activatedRoute.snapshot.queryParams.page > 0? Number(this.activatedRoute.snapshot.queryParams.page) : 1;
      this.search = this.activatedRoute.snapshot.queryParams.search ?? '';
      this.payments = this.activatedRoute.snapshot.data['payments'].body;
      this.totalPayments = this.activatedRoute.snapshot.data['payments'].headers.get('x-total-count') > 0? Number(this.activatedRoute.snapshot.data['payments'].headers.get('x-total-count')) : 1;
      this.filters = {
        date: this.activatedRoute.snapshot.queryParams.date ?? '',
        title: this.activatedRoute.snapshot.queryParams.title ?? '',
        value: this.activatedRoute.snapshot.queryParams.value ?? '',
        payed: this.activatedRoute.snapshot.queryParams.payed ?? '',
      }
    });
  }

  receiveLimit(value: number): void {
    this.limitSelect = value;
    this.currentPage = 1;
    this.changePage(true);
  }

  receivePage(value: number): void {
    this.currentPage = value;
    this.changePage(true);
  }

  receiveSearch(value: string): void {
    this.search = value;
    this.currentPage = 1;
    this.changePage(true);
  }

  receiveFilters(value: IdialogFilter): void {
    this.filters = value;
    this.currentPage = 1;
    this.changePage(true);
  }

  changePage(action: boolean): void{
    if(action) {
      this.router.navigate([], { 
          queryParams: this.createQueryParams()
        })
        .finally(() => {
          this.receivePayment();
      });
    }
  }

  createQueryParams(): Object {
    let params: Object = new Object();

    params["limit"] = this.limitSelect;
    params["page"] = this.currentPage;
    
    if(this.search) {
      params["search"] = this.search;
    }

    if(this.filters.title) {
      params["title"] = this.filters.title;
    }
    
    if(this.filters.value) {
      params["value"] = this.filters.value;
    }

    if(this.filters.date) {
      params["date"] = this.filters.date;
    }

    if(this.filters.payed) {
      params["payed"] = this.filters.payed;
    }

    return params;
  }
}
