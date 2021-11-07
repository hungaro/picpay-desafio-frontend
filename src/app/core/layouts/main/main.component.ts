import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  pageTitle: string;

  private unsubscribeAll: Subject<any>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribeAll),
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;

          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data.title) {
              return child.snapshot.data.title;
            } else {
              return null;
            }
          }
          return null;
        }),
      )
      .subscribe((pageTitle: string) => {
        this.pageTitle = pageTitle;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
