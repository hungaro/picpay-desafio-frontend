import { Ipayment } from './../../shared/models/ipayment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
      this.payments = this.activatedRoute.snapshot.data['payments'].body;
      this.totalPayments = this.activatedRoute.snapshot.data['payments'].headers.get('x-total-count');
    })
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

  changePage(action: boolean): void{
    if(action) {
      this.router.navigate([], { queryParams: { limit: this.limitSelect, page: this.currentPage } })
        .finally(() => {
          this.receivePayment();
      });
    }
  }
}
