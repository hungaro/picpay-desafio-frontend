<<<<<<< HEAD
import { LoadingService } from './core/services/loading/loading.service';
=======
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520
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
<<<<<<< HEAD
  public verifyRouter!: Router;
  public loading!: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService
  ) {}
=======

  constructor(
    private userService: UserService
  ) { }
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520

  ngOnInit(): void {
    this.verifyRouter = this.router;
    this.listenToLoading();
  }
<<<<<<< HEAD

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
  }
=======
>>>>>>> be5a8eadca8bd35f557dc345274781a172642520
}
