import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ToastrModule } from 'ngx-toastr';

import { AngularMaterialModule } from './angular-material.module';

import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [FlexLayoutModule, ToastrModule.forRoot(), AngularMaterialModule, ComponentsModule],
  exports: [FlexLayoutModule, ToastrModule, AngularMaterialModule, ComponentsModule],
})
export class SharedModule {}
