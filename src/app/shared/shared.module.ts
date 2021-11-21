import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPaginatorDirective } from './directives/custom-paginator.directive';

@NgModule({
  declarations: [CustomPaginatorDirective],
  exports: [CustomPaginatorDirective],
  imports: [CommonModule]
})
export class SharedModule {}
