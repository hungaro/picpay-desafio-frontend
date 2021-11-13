import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';
import { HeaderModule } from './components/header/header.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from './components/modal/modal.module';
import { FirstNamePipe } from './pipes/firstName.pipe';
import { CurrencyMaskModule } from 'ng2-currency-mask';
registerLocaleData(ptBr);
@NgModule({
  declarations: [
    FirstNamePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule,
    CurrencyMaskModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    NgxPaginationModule,
    ModalModule,
    FirstNamePipe,
    CurrencyMaskModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class SharedModule { }
