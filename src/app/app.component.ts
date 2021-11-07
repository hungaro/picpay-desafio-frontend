import { UserService } from './core/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public user$ =this.userService.returnUser();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
}
