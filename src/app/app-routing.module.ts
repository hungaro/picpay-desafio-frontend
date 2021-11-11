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
    path: 'not-found',
    loadChildren:() => import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
    canLoad: [PaymentsGuard]
  },
  {
    path: 'payments',
    loadChildren:() => import('./modules/payments/payments.module').then((m) => m.PaymentsModule),
    canLoad: [PaymentsGuard]
  },
  {
    path: 'profile',
    loadChildren:() => import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    canLoad: [PaymentsGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
