import { TasksForTableResolver } from './../../core/resolvers/task/tasks-for-table.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsComponent,
    resolve: {
      payments: TasksForTableResolver
    },
    runGuardsAndResolvers:'always'
  },
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
