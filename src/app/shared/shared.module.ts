import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';

import { ToastrModule } from 'ngx-toastr';

import { AngularMaterialModule } from './angular-material.module';

import { ComponentsModule } from './components/components.module';

export const customCurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
  imports: [
    FlexLayoutModule,
    ToastrModule.forRoot(),
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    AngularMaterialModule,
    ComponentsModule,
  ],
  exports: [
    FlexLayoutModule,
    NgxCurrencyModule,
    ToastrModule,
    AngularMaterialModule,
    ComponentsModule,
  ],
})
export class SharedModule {}
