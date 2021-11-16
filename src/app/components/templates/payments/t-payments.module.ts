import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

import { MaterialModule } from '../../../material.module';

import { SharedModule } from '../../shared/shared.module';
import { PageStructureModule } from '../page-structure/page-structure.module';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CustomPaginatorI18n } from './payment-list/custom-paginator-i18n';
import { PaymentDeleteComponent } from './payment-delete/payment-delete.component';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

const components = [
  PaymentListComponent, PaymentDeleteComponent, PaymentEditComponent, PaymentAddComponent, PaymentDialogComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    PageStructureModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: components,
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginatorI18n
    },
    TaskService
  ]
})
export class TPaymentsModule { }

