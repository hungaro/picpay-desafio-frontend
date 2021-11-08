import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { TaskService } from '@services/task.service';

import { HomeComponent } from './home.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, SearchFilterComponent],
  imports: [CommonModule, FormsModule, SharedModule, HomeRoutingModule],
  exports: [HomeComponent],
  providers: [TaskService],
})
export class HomeModule {}
