import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ListPaymentComponent } from './components/list-payment/list-payment.component';
import { TablePaymentComponent } from './components/list-payment/table-payment/table-payment.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [PaymentComponent, ListPaymentComponent, TablePaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class PaymentModule {}
