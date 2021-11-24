import { Component } from '@angular/core';
import { UserAccount } from '@app/core/models/user-account.model';
import { AuthService } from '@app/core/services/auth.service';
import { DialogConfirmationComponent } from '@app/shared/components/dialog-confirmation/dialog-confirmation.component';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userData: Observable<UserAccount> = this.authService.getUserData();

  constructor(private authService: AuthService) {}

  logout() {
    DialogConfirmationComponent.open({ title: 'Deseja realmente sair?', message: '' })
      .afterClosed()
      .pipe(filter(result => !!result))
      .subscribe(() => this.authService.logout());
  }
}
