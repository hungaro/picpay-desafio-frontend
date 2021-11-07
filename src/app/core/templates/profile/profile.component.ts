import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '@services/authentication.service';

import { Account } from '@models/account.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: Account;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue;
  }
}
