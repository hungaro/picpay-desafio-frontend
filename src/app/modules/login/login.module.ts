import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ImgLoginComponent } from './components/img-login/img-login.component';

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    ImgLoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
