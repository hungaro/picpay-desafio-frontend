import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
