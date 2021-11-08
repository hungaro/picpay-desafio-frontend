<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
<<<<<<< HEAD
    MatMenuModule,
    RouterModule
=======
    MatMenuModule
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
