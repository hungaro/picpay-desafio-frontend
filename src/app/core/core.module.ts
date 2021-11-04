import { NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';

import { AccountService } from './services/account.service';
import { TaskService } from './services/task.service';

@NgModule({
  imports: [LayoutsModule],
  exports: [LayoutsModule],
  providers: [AccountService, TaskService],
})
export class CoreModule {}
