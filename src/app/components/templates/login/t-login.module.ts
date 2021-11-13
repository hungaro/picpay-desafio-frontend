import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../material.module';

import { TLoginFormComponent } from '../login/t-login-form/t-login-form.component';
import { TLoginImgComponent } from '../login/t-login-img/t-login-img.component';
import { SharedModule } from '../../shared/shared.module';

const components = [
  TLoginFormComponent, TLoginImgComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: components
})
export class TLoginModule { }
