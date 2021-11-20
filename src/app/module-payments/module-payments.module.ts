import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulePaymentsRoutingModule } from './module-payments-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PaymentsComponent } from './components/payments/payments.component';


@NgModule({
  declarations: [ PaymentsComponent ],
  imports: [
    CommonModule,
    ModulePaymentsRoutingModule,
    SharedModule
  ]
})
export class ModulePaymentsModule { }
