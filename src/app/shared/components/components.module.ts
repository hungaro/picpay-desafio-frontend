import { NgModule } from '@angular/core';

import { LoaderModule } from './loader/loader.module';
import { PaginatorModule } from './paginator/paginator.module';

@NgModule({
  imports: [LoaderModule, PaginatorModule],
  exports: [LoaderModule, PaginatorModule],
})
export class ComponentsModule {}
