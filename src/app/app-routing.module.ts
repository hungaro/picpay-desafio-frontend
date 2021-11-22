import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent, NotFoundComponent } from '@app/core/components';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'payment',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
