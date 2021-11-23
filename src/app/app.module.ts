import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {SecurityService} from './services/security.service';
import {DatePipe} from '@angular/common';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {NotificationService} from './services/notification.service';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent
   ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatSnackBarModule
  ],
  providers: [
        DataService,
        SecurityService,
        NotificationService,
        DatePipe,
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
