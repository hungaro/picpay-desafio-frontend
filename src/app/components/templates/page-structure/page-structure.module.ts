import { NgModule } from '@angular/core';

import { MaterialModule } from '../../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { PageStructureComponent } from './page-structure.component';

const components = [
  PageStructureComponent
]

@NgModule({
  declarations: components,
  imports: [
    MaterialModule,
    SharedModule
  ],
  exports: components
})
export class PageStructureModule { }
