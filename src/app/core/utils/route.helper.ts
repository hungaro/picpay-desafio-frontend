import { Routes } from '@angular/router';
import { ShellComponent } from '@app/core/components/shell/shell.component';

export class Route {
  static withShell(routes: Routes): Routes {
    return [
      {
        path: '',
        component: ShellComponent,
        children: routes,
        data: { reuse: true }
      }
    ];
  }
}
