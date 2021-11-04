import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule],
  exports: [MainComponent],
})
export class LayoutsModule {}
