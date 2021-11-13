import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MyPaymentsComponent } from './pages/payments/my-payments/my-payments.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'my-payments', component: MyPaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
