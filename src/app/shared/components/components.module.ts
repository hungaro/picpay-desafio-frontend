import { NgModule } from '@angular/core';

import { PaginatorModule } from './paginator/paginator.module';

@NgModule({
  imports: [PaginatorModule],
  exports: [PaginatorModule],
})
export class ComponentsModule {}
