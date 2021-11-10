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
import { TablePaymentsComponent } from './components/table-payments/table-payments.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { SelectLimitComponent } from './components/select-limit/select-limit.component';
import { PaginationPaymentComponent } from './components/pagination-payment/pagination-payment.component';

@NgModule({
  declarations: [
    PaymentsComponent,
    AddPaymentComponent,
    FormPaymentComponent,
    DialogPaymentComponent,
    ViewPaymentDeleteComponent,
    TablePaymentsComponent,
    ViewPaymentDeleteComponent,
    SelectLimitComponent,
    PaginationPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class PaymentsModule { }
