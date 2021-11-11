import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnBackComponent } from './btn-back.component';

@NgModule({
  declarations: [
    BtnBackComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BtnBackComponent
  ]
})
export class BtnBackModule { }
