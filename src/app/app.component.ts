import { LoadingService } from './core/services/loading/loading.service';
import { UserService } from './core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public user$ =this.userService.returnUser();
  public verifyRouter!: Router;
  public loading!: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.verifyRouter = this.router;
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
  }
}
