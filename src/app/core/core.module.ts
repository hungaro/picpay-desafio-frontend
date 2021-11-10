import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountService } from '@services/account.service';
import { AuthenticationService } from '@services/authentication.service';
import { PaymentService } from '@services/payment.service';

import { AuthGuard } from '@guards/auth.guard';

import { LayoutsModule } from '@layouts/layouts.module';

@NgModule({
  imports: [RouterModule, LayoutsModule],
  exports: [LayoutsModule],
  providers: [AccountService, AuthenticationService, PaymentService, AuthGuard],
})
export class CoreModule {}
