import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { IPayment } from 'src/app/interfaces/payment.interface';
import { PaymentService } from 'src/app/services/payment.service';
import { AddModalComponent } from './add-modal/add-modal.component';
import { RemoveModalComponent } from './remove-modal/remove-modal.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  paymentList: Array<IPayment> = [];
  inputSearch: string = '';
  pageSize: number = 10;
  page: number = 1;
  
  constructor(
    private paymentService: PaymentService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(){
    this.getList();
  }

  add(): void {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '520px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  remove(id: number): void {
    this.dialog.open(RemoveModalComponent);
  }

  edit(id: number): void {
    console.log(id);
  }

  getList(): void {
    this.paymentService.getPaymentList({ _limit: this.pageSize, username: this.inputSearch, _page: this.page }).subscribe({
      next: (list: IPayment[]) => {
        this.paymentList = list;
      }
    })
  }

}
