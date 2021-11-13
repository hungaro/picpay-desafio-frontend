import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MyPaymentsComponent } from './payments/my-payments/my-payments.component';

const components = [
  LoginComponent, MyPaymentsComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class PagesModule { }
