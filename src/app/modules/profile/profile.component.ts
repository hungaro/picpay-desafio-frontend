import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { AccountService } from './../../core/services/account/account.service';
import { SnackbarService } from './../../core/services/snackbar/snackbar.service';
import { IformIdentification } from './../../shared/models/iform-identification';
import { UserService } from './../../core/services/user/user.service';
import { Iuser } from 'src/app/shared/models/iuser';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user$: Observable<Iuser> = this.userService.returnUser();
  public disableBtn!: boolean;

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  receiveFormIdentification(form: IformIdentification, user: Iuser): void {
    user.email = form.email;
    user.name = form.name;
    this.updateUser(user);
  }

  receiveFormPassword(password: string, user: Iuser): void {
    user.password = password;
    this.updateUser(user);
  }

  updateUser(user: Iuser): void {
    this.disableBtn = true;
    this.accountService.put(user).subscribe((user: Iuser) => {
      this.disableBtn = false;
      this.snackbar.openSuccess(MessagesSnackbar.successfully_edited);
    },
    error => {
      this.disableBtn = false;

      switch (error.message) {
        case '404':
          this.snackbar.openError(MessagesSnackbar.unauthorized_login_error);
          break;
        default:
          this.snackbar.openError(MessagesSnackbar.server_error);
          break;
      }
    })
  }
}
