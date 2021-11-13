import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './core/errors/access-denied/access-denied.component';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { MyPaymentsComponent } from './pages/payments/my-payments/my-payments.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'my-payments', component: MyPaymentsComponent },
  {
    path: 'denied',
    component: AccessDeniedComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
