import { SnackbarService } from './../../../../core/services/snackbar/snackbar.service';
import { TaskService } from './../../../../core/services/task/task.service';
import { Ipayment } from './../../../../shared/models/ipayment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextsButton } from 'src/app/shared/enums/texts-button';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';

@Component({
  selector: 'app-view-payment-delete',
  templateUrl: './view-payment-delete.component.html',
  styleUrls: ['./view-payment-delete.component.scss']
})
export class ViewPaymentDeleteComponent implements OnInit {

  @Input() payment!: Ipayment;
  @Output() action = new EventEmitter<boolean>();
  public txtBtnCancel: string = TextsButton.cancel;
  public txtBtnSave: string = TextsButton.save;
  public disableBtnSave!: boolean;

  constructor(
    private taskService: TaskService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.action.emit(false);
  }

  deletePayment(): void {
    this.disableBtnSave = true;
    this.txtBtnSave = TextsButton.saving;

    this.taskService.delete(this.payment.id).subscribe((result: any) => {
      this.snackbar.openSuccess(MessagesSnackbar.successfully_deleted);
      this.action.emit(true);
    },
    error => {
      this.disableBtnSave = false;
      this.txtBtnSave = TextsButton.save;
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }
}
