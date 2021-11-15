import { NgModule } from '@angular/core';

import { MaterialModule } from '../../../material.module';

import { SharedModule } from '../../shared/shared.module';
import { PageStructureModule } from '../page-structure/page-structure.module';
import { TPaymentsComponent } from './t-payments/t-payments.component';

const components = [
  TPaymentsComponent
]

@NgModule({
  declarations: components,
  imports: [
    MaterialModule,
    SharedModule,
    PageStructureModule
  ],
  exports: components
})
export class TPaymentsModule { }
