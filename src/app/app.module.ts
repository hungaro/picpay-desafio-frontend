import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { translations } from './i18n/pt';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailComponent } from './components/email/email.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PasswordComponent } from './components/password/password.component';

const imports = [
  BrowserModule,
  AppRoutingModule,
  RouterModule,
  HttpClientModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatIconModule
]

const providers = []

@NgModule({
  declarations: [	
    AppComponent, LoginComponent, EmailComponent, PasswordComponent
   ],
  imports: [
    ...imports,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private translateService: TranslateService
  ){
    this.translateService.setTranslation(this.translateService.currentLang, translations)
  }
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
