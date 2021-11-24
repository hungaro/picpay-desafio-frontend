import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '@app/core/services/snackbar.service';
import { PaymentTask } from '@app/payment/models/payment-task.model';
import { PaymentInjectorInstance } from '@app/payment/payment-injector-instance';
import { PaymentTaskService } from '@app/payment/services/payment-task.service';

interface DialogData {
  paymentTask: PaymentTask;
}

@Component({
  selector: 'app-dialog-add-payment',
  templateUrl: './dialog-add-payment.component.html',
  styleUrls: ['./dialog-add-payment.component.scss']
})
export class DialogAddPaymentComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(this.data?.paymentTask.name ?? null, [Validators.required]),
    username: new FormControl(this.data?.paymentTask.username ?? null),
    value: new FormControl(this.data?.paymentTask.value ?? null, [Validators.required]),
    date: new FormControl(this.data?.paymentTask.date ?? null, [Validators.required]),
    title: new FormControl(this.data?.paymentTask.title ?? null)
  });

  constructor(
    private dialogRef: MatDialogRef<DialogAddPaymentComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private paymentTaskService: PaymentTaskService,
    private snackBar: SnackbarService
  ) {}

  static open(data?: DialogData): MatDialogRef<DialogAddPaymentComponent, boolean> {
    const dialog: MatDialog = PaymentInjectorInstance.getInjector().get<MatDialog>(MatDialog);
    return dialog.open(DialogAddPaymentComponent, { data, disableClose: true });
  }

  cancel() {
    this.dialogRef.close(false);
  }

  save() {
    if (this.form.valid) {
      if (!!this.data?.paymentTask) {
        this.paymentTaskService.updatePaymentTask({ ...this.data.paymentTask, ...this.form.value }).subscribe(() => {
          this.snackBar.showSuccess('Registro atualizado com sucesso!');
          this.dialogRef.close(true);
        });
      } else {
        this.paymentTaskService.savePaymentTask(this.form.value).subscribe(() => {
          this.snackBar.showSuccess('Registro salvo com sucesso!');
          this.dialogRef.close(true);
        });
      }
    }
  }

  castAny = (a: any) => a as any;
}
