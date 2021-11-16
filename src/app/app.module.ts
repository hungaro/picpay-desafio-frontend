import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';


import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    AppRoutingModule,
    PagesModule,
    CoreModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
