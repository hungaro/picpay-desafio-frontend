import { NgModule } from '@angular/core';

import { LayoutsModule } from '@layouts/layouts.module';

import { TemplatesModule } from '@templates/templates.module';

import { AccountService } from '@services/account.service';
import { AuthenticationService } from '@services/authentication.service';
import { TaskService } from '@services/task.service';

import { AuthGuard } from '@guards/auth.guard';

@NgModule({
  imports: [LayoutsModule, TemplatesModule],
  exports: [LayoutsModule, TemplatesModule],
  providers: [AccountService, AuthenticationService, TaskService, AuthGuard],
})
export class CoreModule {}
