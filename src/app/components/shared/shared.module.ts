import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';

import { AButtonComponent } from './a-button/a-button.component';
import { AInputTextComponent } from './a-input-text/a-input-text.component';
import { AInputPasswordComponent } from './a-input-password/a-input-password.component';
import { AHeaderLabelComponent } from './a-header-label/a-header-label.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MNavbarComponent } from './m-navbar/m-navbar.component';
import { ALogoComponent } from './a-logo/a-logo.component';

const components = [
  AButtonComponent, AInputTextComponent, AInputPasswordComponent, AHeaderLabelComponent, MNavbarComponent, ALogoComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: components
})
export class SharedModule { }
