import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountService } from '@services/account.service';
import { AuthenticationService } from '@services/authentication.service';
import { TaskService } from '@services/task.service';

import { AuthGuard } from '@guards/auth.guard';

import { SharedModule } from '@shared/shared.module';

import { HeaderComponent } from './templates/header/header.component';
import { MainComponent } from './layouts/main/main.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent],
  imports: [SharedModule, RouterModule],
  exports: [MainComponent],
  providers: [AccountService, AuthenticationService, TaskService, AuthGuard],
})
export class CoreModule {}
