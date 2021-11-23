import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmationComponent } from './components/dialog-confirmation/dialog-confirmation.component';
import { CustomPaginatorDirective } from './directives/custom-paginator.directive';
import { SharedInjectorInstance } from './shared-injector-instance';

@NgModule({
  declarations: [CustomPaginatorDirective, DialogConfirmationComponent],
  exports: [CustomPaginatorDirective],
  imports: [CommonModule, MatDialogModule, MatButtonModule, FlexLayoutModule],
  providers: [DatePipe, CurrencyPipe]
})
export class SharedModule {
  constructor(private injector: Injector) {
    SharedInjectorInstance.setInjector(this.injector);
  }
}
