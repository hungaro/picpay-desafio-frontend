import { NgModule } from '@angular/core';

import { TLoginModule } from './login/t-login.module';
import { TPaymentsModule } from './payments/t-payments.module';

const modules = [
  TLoginModule, TPaymentsModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class TemplatesModule { }
