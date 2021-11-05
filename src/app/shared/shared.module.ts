import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ToastrModule } from 'ngx-toastr';

import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  imports: [FlexLayoutModule, ToastrModule.forRoot(), AngularMaterialModule],
  exports: [FlexLayoutModule, ToastrModule, AngularMaterialModule],
})
export class SharedModule {}
