import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {path: '', component: LoginComponent},
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
