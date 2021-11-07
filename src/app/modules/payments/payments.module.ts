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

@NgModule({
  declarations: [
    PaymentsComponent,
    AddPaymentComponent,
    FormPaymentComponent,
    DialogPaymentComponent,
    ViewPaymentDeleteComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class PaymentsModule { }
