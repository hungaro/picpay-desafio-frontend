import { RouterModule } from '@angular/router';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import localePt from '@angular/common/locales/pt';
import { ToolbarModule } from './core/toolbar/toolbar.module';
<<<<<<< HEAD
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
=======
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
<<<<<<< HEAD
    ToolbarModule,
    MatProgressBarModule
=======
    ToolbarModule
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
    },
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
