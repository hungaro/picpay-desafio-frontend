import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../material.module';

import { SharedModule } from '../../shared/shared.module';
import { TPaymentsComponent } from './t-payments/t-payments.component';

const components = [
  TPaymentsComponent
]

@NgModule({
  declarations: components,
  imports: [
    MaterialModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: components
})
export class TPaymentsModule { }
