import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  pageTitle: string;

  private unsubscribeAll: Subject<any>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.activatedRoute.firstChild?.data.subscribe((data) => {
      this.pageTitle = data?.title;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
