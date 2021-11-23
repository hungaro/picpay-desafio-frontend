import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {PaymentComponent} from './payment/payment.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'payment', component: PaymentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        scrollOffset: [0, 150]
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
