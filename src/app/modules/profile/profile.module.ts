import { SharedModule } from 'src/app/shared/shared.module';
import { BtnBackModule } from './../../shared/components/btn-back/btn-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormProfileIdentificationComponent } from './components/form-profile-identification/form-profile-identification.component';
import { FormProfilePasswordComponent } from './components/form-profile-password/form-profile-password.component';

@NgModule({
  declarations: [
    ProfileComponent,
    FormProfileIdentificationComponent,
    FormProfilePasswordComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    BtnBackModule,
    SharedModule,
    MatChipsModule
  ]
})
export class ProfileModule { }
