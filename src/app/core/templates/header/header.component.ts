import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';

import { Account } from '@models/account.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: Account;

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue;
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
