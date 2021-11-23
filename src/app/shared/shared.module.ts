import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmationComponent } from './components/dialog-confirmation/dialog-confirmation.component';
import { LogoComponent } from './components/logo/logo.component';
import { TitleComponent } from './components/title/title.component';
import { CustomPaginatorDirective } from './directives/custom-paginator.directive';
import { SharedInjectorInstance } from './shared-injector-instance';

@NgModule({
  declarations: [CustomPaginatorDirective, DialogConfirmationComponent, LogoComponent, TitleComponent],
  exports: [CustomPaginatorDirective, LogoComponent, TitleComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, FlexLayoutModule],
  providers: [DatePipe, CurrencyPipe]
})
export class SharedModule {
  constructor(private injector: Injector) {
    SharedInjectorInstance.setInjector(this.injector);
  }
}
