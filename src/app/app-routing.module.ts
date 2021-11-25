import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { PicGuard } from './core/guard/pic-guard';

const routes: Routes = [
  {
    path: 'payments',
    loadChildren: () => import('./module-payments/module-payments.module').then (m => m.ModulePaymentsModule),
    canActivate: [ PicGuard ],
    canLoad: [ PicGuard ]
  },
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
