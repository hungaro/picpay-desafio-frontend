import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MyPaymentsComponent } from './payments/my-payments/my-payments.component';
import { TemplatesModule } from '../components/templates/templates.module';
import { LoginImgComponent } from './login/login-img.component';

const components = [
  LoginComponent, LoginImgComponent, MyPaymentsComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: components
})
export class PagesModule { }
