import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';

import { AButtonComponent } from './a-button/a-button.component';
import { AInputTextComponent } from './a-input-text/a-input-text.component';
import { AInputPasswordComponent } from './a-input-password/a-input-password.component';

const components = [
  AButtonComponent, AInputTextComponent, AInputPasswordComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: components
})
export class SharedModule { }
