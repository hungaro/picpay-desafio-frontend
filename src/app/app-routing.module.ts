import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login/login.guard';
import { PaymentsGuard } from './core/guards/payments/payments.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren:() => import('./modules/login/login.module').then((m) => m.LoginModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'payments',
    loadChildren:() => import('./modules/payments/payments.module').then((m) => m.PaymentsModule),
    canLoad: [PaymentsGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
