import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '@app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { DialogAddPaymentComponent } from './components/dialog-add-payment/dialog-add-payment.component';
import { ListPaymentComponent } from './components/list-payment/list-payment.component';
import { TablePaymentComponent } from './components/list-payment/table-payment/table-payment.component';
import { PaymentInjectorInstance } from './payment-injector-instance';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';

@NgModule({
  declarations: [PaymentComponent, ListPaymentComponent, TablePaymentComponent, DialogAddPaymentComponent],
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
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class PaymentModule {
  constructor(private injector: Injector) {
    PaymentInjectorInstance.setInjector(this.injector);
  }
}
