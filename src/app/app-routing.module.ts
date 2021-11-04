import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '@core/layouts/main/main.component';

const ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
