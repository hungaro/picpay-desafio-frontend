import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPayment } from '../../../app/interfaces/payment.interface';


@Component({
  selector: 'payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();

  hasPaymentList = false;

  @Output('remove') remove$: EventEmitter<IPayment> = new EventEmitter<IPayment>();
  @Output('edit') edit$: EventEmitter<IPayment> = new EventEmitter<IPayment>();
  @Output('unPay') unPay$: EventEmitter<IPayment> = new EventEmitter<IPayment>();
  @Output('pay') pay$: EventEmitter<IPayment> = new EventEmitter<IPayment>();

  @Input() set paymentList(list: IPayment[]){
    if(list.length > 0){
      this.hasPaymentList = true;
    }

    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  };

  displayedColumns: string[] = ['username', 'title', 'date', 'value', 'payed', 'edit', 'remove'];

  

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  remove(pay: IPayment): void {
    this.remove$.emit(pay);
  }

  edit(pay: IPayment): void {
    this.edit$.emit(pay);
  }

  pay(payment: IPayment): void {
    payment.isPayed = true;

    this.pay$.emit(payment);
  }

  unPay(payment: IPayment): void {

    payment.isPayed = false;

    this.unPay$.emit(payment);
  }
}
