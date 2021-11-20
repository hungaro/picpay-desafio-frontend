import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './core/authentication/authentication.component';

const routes: Routes = [
  {
    path: 'ok',
    loadChildren: () => import('./module-payments/module-payments.module').then (m => m.ModulePaymentsModule),
  },
  {
    path: '',
    component: AuthenticationComponent
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
