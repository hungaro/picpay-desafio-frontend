import { NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  imports: [LayoutsModule],
  exports: [LayoutsModule],
})
export class CoreModule {}
