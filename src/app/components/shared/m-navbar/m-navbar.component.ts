import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ProfileService } from 'src/app/core/auth/profile.service';
import { User } from 'src/app/core/auth/user';
import { TokenService } from 'src/app/core/token/token.service';
import { environment } from '../../../../environments/environment';

const APP_TITLE = environment.appTitle;
const APP_SUBTITLE = environment.appSubtitle;

@Component({
  selector: 'm-navbar',
  templateUrl: './m-navbar.component.html',
  styleUrls: ['./m-navbar.component.scss']
})
export class MNavbarComponent implements OnInit {

  title: string = APP_TITLE;
  subtitle: string = APP_SUBTITLE;
  user: User;

  constructor(private profileService: ProfileService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.profileService.getUserProfile();
  }

  logout(){
    this.authService.logout();
  }

}
