import { Route, Routes } from '@angular/router';
import { ShellComponent } from '../components/shell/shell.component';
import { Route as RouteHelper } from './route.helper';

describe('Route', () => {
  it('withShell QUANDO tem guard DEVE retornar rotas', () => {
    const testeComponent: any = {
      testeComponent: 'testeComponent'
    };

    const routes: Routes = [{ path: 'teste', component: testeComponent }];

    const expectedRoutes: Routes = [
      {
        path: '',
        component: ShellComponent,
        children: routes,
        data: { reuse: true }
      } as Route
    ];

    const result = RouteHelper.withShell(routes);
    expect(result).toEqual(expectedRoutes);
  });
});
