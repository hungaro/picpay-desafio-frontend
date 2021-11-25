import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PicGuard } from './core/guard/pic-guard';

@NgModule({
  declarations: [	
    AppComponent, AuthenticationComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PicGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
