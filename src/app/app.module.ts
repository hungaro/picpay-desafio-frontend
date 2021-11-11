import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AccountComponent } from './pages/account/account.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [	
    AppComponent, AuthComponent, DashboardComponent, LoginComponent, TasksComponent, AccountComponent, AccountComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
