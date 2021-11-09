import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PaymentsComponent } from "./components/payments/payments.component";

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'payments', component: PaymentsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule {}