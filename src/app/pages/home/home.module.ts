import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { TaskService } from '@services/task.service';

import { HomeComponent } from './home.component';

import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { PaymentDeleteDialogComponent } from './components/dialogs/payment-delete-dialog/payment-delete-dialog.component';

import { HomeRoutingModule } from './home-routing.module';

const COMPONENTS = [SearchFilterComponent, PaymentDeleteDialogComponent];

@NgModule({
  declarations: [HomeComponent, ...COMPONENTS],
  imports: [CommonModule, FormsModule, SharedModule, HomeRoutingModule],
  exports: [HomeComponent],
  providers: [TaskService, DatePipe, CurrencyPipe],
})
export class HomeModule {}
