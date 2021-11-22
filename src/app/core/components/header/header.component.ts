import { Component } from '@angular/core';
import { UserAccount } from '@app/core/models/user-account.model';
import { AuthService } from '@app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userData: Observable<UserAccount> = this.authService.getUserData();

  constructor(private authService: AuthService) {}
}
