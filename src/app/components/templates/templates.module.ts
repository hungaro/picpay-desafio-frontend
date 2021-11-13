import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TLoginModule } from './login/t-login.module';

@NgModule({
  imports: [
    CommonModule,
    TLoginModule
  ],
})
export class TemplatesModule { }
