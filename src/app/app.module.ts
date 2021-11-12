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
import { AuthService } from './services/auth.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentTableComponent } from './components/payment-table/payment-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { PaymentService } from './services/payment.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { AddModalComponent } from './components/payments/add-modal/add-modal.component';
import { RemoveModalComponent } from './components/payments/remove-modal/remove-modal.component';
import { MatOptionModule } from '@angular/material/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
  MatIconModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatCheckboxModule,
  MatDialogModule,
  MatOptionModule,
  NgxMaskModule.forRoot(maskConfig),
]

const providers = [AuthService, PaymentService]

const modals = [AddModalComponent, RemoveModalComponent]

@NgModule({
  declarations: [	
    AppComponent, LoginComponent, EmailComponent, PasswordComponent, PaymentsComponent, PaymentTableComponent,
    ...modals
   ],
  imports: [
    ...imports,
    BrowserAnimationsModule
  ],
  providers: [...providers],
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
