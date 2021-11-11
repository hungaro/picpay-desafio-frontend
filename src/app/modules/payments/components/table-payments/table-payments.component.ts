import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from './../../../../core/services/snackbar/snackbar.service';
import { TaskService } from './../../../../core/services/task/task.service';
import { Ipayment } from './../../../../shared/models/ipayment';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { DialogPaymentComponent } from '../dialog-payment/dialog-payment.component';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.scss']
})
export class TablePaymentsComponent implements OnInit {

  @Input() payments!: Ipayment[];
  @Output() action = new EventEmitter<boolean>();
  @Output() sort = new EventEmitter<Sort>();
  public displayedColumns: string[] = ['name', 'title', 'date', 'value', 'Pago', 'Ação'];
  public disableCheck!: boolean; 

  constructor(
    private dialog: MatDialog,
    private taskService: TaskService,
    private snackbar: SnackbarService,
  ) { }

  ngOnInit(): void {

  }

  announceSortChange(sortState: Sort) {
    this.sort.emit(sortState);
  }

  openDialog(edit: boolean, del: boolean, payment: Ipayment): void {
    const dialogRef = this.dialog.open(DialogPaymentComponent, {
      data: {
        delete: del,
        edit: edit,
        payment: payment
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.action.emit(result);
    });
  }

  putPayment(payment: Ipayment): void {
    this.disableCheck = true;
    payment.isPayed = !payment.isPayed;
    this.taskService.put(payment).subscribe((payment: Ipayment) => {
      this.disableCheck = false;
      this.snackbar.openSuccess(MessagesSnackbar.successfully_edited);
    },
    error => {
      this.disableCheck = false;
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }
}
