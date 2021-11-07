import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfileComponent, HeaderComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfileComponent, HeaderComponent],
})
export class TemplatesModule {}
