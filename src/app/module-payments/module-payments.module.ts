import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { ModulePaymentsRoutingModule } from './module-payments-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PaymentsComponent } from './components/payments/payments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PicGuard } from '../core/guard/pic-guard';


@NgModule({
  declarations: [ PaymentsComponent ],
  imports: [
    CommonModule,
    ModulePaymentsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [DecimalPipe, HttpClient, PicGuard],
})
export class ModulePaymentsModule { }
