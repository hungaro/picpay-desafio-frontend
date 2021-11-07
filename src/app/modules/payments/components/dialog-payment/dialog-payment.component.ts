import { Ipayment } from './../../../../shared/models/ipayment';
import { IdialogPayment } from './../../../../shared/models/idialog-payment';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-payment',
  templateUrl: './dialog-payment.component.html',
  styleUrls: ['./dialog-payment.component.scss']
})
export class DialogPaymentComponent implements OnInit {

  public dialogPayment!: IdialogPayment;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IdialogPayment,
    private dialogRef: MatDialogRef<DialogPaymentComponent>
  ) { }

  ngOnInit(): void {
    this.receiveData();
  }

  receiveData(): void {
    if (this.data) {
      this.dialogPayment = this.data;
    }
  }

  closeDialog(value: boolean): void{
    this.dialogRef.close(value);
  }
}
