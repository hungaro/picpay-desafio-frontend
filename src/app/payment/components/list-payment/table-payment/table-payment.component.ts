import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentTask } from '@app/payment/models/payment-task.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-table-payment',
  templateUrl: './table-payment.component.html',
  styleUrls: ['./table-payment.component.scss']
})
export class TablePaymentComponent implements OnInit, OnChanges, OnDestroy {
  @Input() list?: PaymentTask[];
  @Output() tsort: EventEmitter<MatSort> = new EventEmitter<MatSort>();
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed', 'actions'];
  dataSource: MatTableDataSource<PaymentTask>;
  destroySubscriber: Subject<void> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.list);
    this.sort?.sortChange.pipe(takeUntil(this.destroySubscriber)).subscribe(() => this.tsort.emit(this.sort));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.list) {
      let newList = changes.list.currentValue;
      this.dataSource = new MatTableDataSource(newList);
    }
  }

  ngOnDestroy(): void {
    this.destroySubscriber?.next();
    this.destroySubscriber?.complete();
  }
}
