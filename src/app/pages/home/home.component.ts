import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { merge, of, Subject } from 'rxjs';
import { catchError, map, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { TaskService } from '@services/task.service';

import { Task } from '@models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  dataSource: Task[];

  displayedColumns: string[];

  loading: boolean;

  hasError: boolean;

  tasksLength: number;

  private unsubscribeAll$: Subject<any>;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private taskService: TaskService) {
    this.setDefaults();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        takeUntil(this.unsubscribeAll$),
        startWith([] as Task[]),
        switchMap(() => {
          let sortActive = this.sort.active;

          if (this.sort.active === 'user') {
            sortActive = 'name';
          }

          this.loading = true;

          return this.taskService
            .retrieveTasks(
              sortActive,
              this.sort.direction,
              this.paginator.pageIndex,
              this.paginator.pageSize,
            )
            .pipe(catchError(() => of(null)));
        }),
        map((response) => {
          this.loading = false;
          this.hasError = response === null;

          if (response === null) {
            return { body: [] };
          }

          this.tasksLength = response.headers.get('X-Total-Count');

          return response;
        }),
      )
      .subscribe((response) => {
        this.dataSource = response.body;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  private setDefaults(): void {
    this.displayedColumns = ['user', 'title', 'date', 'value', 'isPayed', 'actions'];
    this.loading = false;
    this.hasError = false;

    this.unsubscribeAll$ = new Subject();
  }
}
