import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module';
import { PaymentsComponent } from './module-payments/components/payments/payments.component';

@NgModule({
  declarations: [	
    AppComponent, AuthenticationComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
