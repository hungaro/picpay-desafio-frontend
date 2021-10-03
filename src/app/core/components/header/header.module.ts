import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header.component'
import { PoAvatarModule, PoDropdownModule } from '@po-ui/ng-components'
import { AuthService } from 'app/core/services/auth/auth.service'

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, PoAvatarModule, PoDropdownModule, RouterModule],
  providers: [AuthService]
})
export class HeaderModule {}
