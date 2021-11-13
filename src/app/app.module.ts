import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './pages/login/login.component';
import { TemplatesModule } from './components/templates/templates.module';
import { SharedModule } from './components/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [	
    AppComponent, LoginComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    TemplatesModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
