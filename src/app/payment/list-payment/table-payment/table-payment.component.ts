import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentTask } from '@app/payment/models/payment-task.model';

@Component({
  selector: 'app-table-payment',
  templateUrl: './table-payment.component.html',
  styleUrls: ['./table-payment.component.scss']
})
export class TablePaymentComponent implements OnInit {
  @Input() list?: PaymentTask[];

  textSearchControl = new FormControl();
  displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed'];
  dataSource: MatTableDataSource<PaymentTask>;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.list);
  }
}
