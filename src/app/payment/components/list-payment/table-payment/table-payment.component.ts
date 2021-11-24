import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarService } from '@app/core/services/snackbar.service';
import { PaymentTask } from '@app/payment/models/payment-task.model';
import { PaymentTaskService } from '@app/payment/services/payment-task.service';
import { DialogConfirmationComponent } from '@app/shared/components/dialog-confirmation/dialog-confirmation.component';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DialogAddPaymentComponent } from '../../dialog-add-payment/dialog-add-payment.component';

@Component({
  selector: 'app-table-payment',
  templateUrl: './table-payment.component.html',
  styleUrls: ['./table-payment.component.scss']
})
export class TablePaymentComponent implements OnInit, OnChanges, OnDestroy {
  @Input() list?: PaymentTask[];
  @Output() tsort: EventEmitter<MatSort> = new EventEmitter<MatSort>();
  @Output() updateList: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed', 'actions'];
  dataSource: MatTableDataSource<PaymentTask>;
  destroySubscriber: Subject<void> = new Subject();

  constructor(
    private currencyPipe: CurrencyPipe,
    private datePipe: DatePipe,
    private paymentTaskService: PaymentTaskService,
    private snackBar: SnackbarService
  ) {}

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
    this.destroySubscriber.next();
    this.destroySubscriber.complete();
  }

  editPaymentTask(paymentTask: PaymentTask): void {
    DialogAddPaymentComponent.open({ paymentTask })
      .afterClosed()
      .pipe(filter(result => !!result))
      .subscribe(data => this.updateList.emit(true));
  }

  deletePaymentTask(paymentTask: PaymentTask) {
    DialogConfirmationComponent.open({
      title: 'Excluir pagamento',
      message: `
        <p>Usuário: ${paymentTask.name} </p>
        <p>Data: ${this.datePipe.transform(paymentTask.date, 'shortDate')} </p>
        <p>Valor: R$ ${this.currencyPipe.transform(paymentTask.value)} </p>
      `,
      yesCallback: dialog => {
        this.paymentTaskService.deletePaymentTask(paymentTask.id).subscribe(() => {
          this.updateList.emit(true);
          this.snackBar.showSuccess('Registro excluído com sucesso!');
          dialog.close(true);
        });
        return true;
      }
    });
  }
}
