import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../material.module';

import { SharedModule } from '../../shared/shared.module';
import { TLoginComponent } from './t-login/t-login.component';

const components = [
  TLoginComponent
]

@NgModule({
  declarations: components,
  imports: [
    MaterialModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: components
})
export class TLoginModule { }
