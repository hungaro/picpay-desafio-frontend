import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { FormPaymentComponent } from './components/form-payment/form-payment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPaymentComponent } from './components/dialog-payment/dialog-payment.component';
import { ViewPaymentDeleteComponent } from './components/view-payment-delete/view-payment-delete.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
<<<<<<< HEAD
import { TablePaymentsComponent } from './components/table-payments/table-payments.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
=======
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520

@NgModule({
  declarations: [
    PaymentsComponent,
    AddPaymentComponent,
    FormPaymentComponent,
    DialogPaymentComponent,
<<<<<<< HEAD
    ViewPaymentDeleteComponent,
    TablePaymentsComponent
=======
    ViewPaymentDeleteComponent
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule,
    MatDialogModule,
    MatDatepickerModule,
<<<<<<< HEAD
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule
=======
    MatNativeDateModule
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520
  ]
})
export class PaymentsModule { }
