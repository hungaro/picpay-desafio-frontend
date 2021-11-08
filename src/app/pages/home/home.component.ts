import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { merge, Observable, of, Subject } from 'rxjs';
import { catchError, finalize, map, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { TaskService } from '@services/task.service';

import { Task } from '@models/task.model';
import { SearchFilter } from './components/search-filter/search-filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  dataSource: Task[];

  displayedColumns: string[];

  filters: SearchFilter;

  isLoadingTasks: boolean;

  isLoadingTaskDelete: { [key: number]: boolean };

  isLoadingTaskUpdate: { [key: number]: boolean };

  nameFilter: string;

  hasError: boolean;

  tasksLength: number;

  private unsubscribeAll$: Subject<any>;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private taskService: TaskService,
    private toastrService: ToastrService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.setDefaults();
  }

  ngAfterViewInit(): void {
    this.setEventListeners();
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  retrieveTasks(): Observable<HttpResponse<Task[]>> {
    return this.taskService
      .retrieveTasks(
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.filters,
      )
      .pipe(
        catchError(() => {
          this.toastrService.error('Erro ao buscar pagamentos');
          return of(null);
        }),
      );
  }

  updatePayment(id: number, isPaid: boolean): void {
    this.isLoadingTaskUpdate[id] = true;

    const index = this.dataSource.findIndex((data) => data.id === id);
    const payment = this.dataSource[index];

    this.taskService
      .updateTask(id, { isPayed: !isPaid })
      .pipe(
        takeUntil(this.unsubscribeAll$),
        finalize(() => {
          this.isLoadingTaskUpdate[id] = false;
        }),
      )
      .subscribe(
        () => {
          payment.isPayed = !isPaid;
          this.toastrService.success('Pagamento atualizado com sucesso.');
        },
        () => {
          payment.isPayed = isPaid;
          this.toastrService.error('Erro ao atualizar pagamento.');
        },
      );
  }

  deletePayment(id: number): void {
    this.isLoadingTaskDelete[id] = true;

    this.taskService
      .deleteTask(id)
      .pipe(
        takeUntil(this.unsubscribeAll$),
        finalize(() => {
          this.isLoadingTaskDelete[id] = false;
        }),
      )
      .subscribe(
        () => {
          this.toastrService.success('Pagamento deletado com sucesso.');

          this.isLoadingTasks = true;

          this.retrieveTasks()
            .pipe(
              takeUntil(this.unsubscribeAll$),
              finalize(() => {
                this.isLoadingTasks = false;
              }),
            )
            .subscribe((response: HttpResponse<Task[]>) => {
              this.dataSource = response?.body;
              this.tasksLength = +response.headers.get('X-Total-Count');
            });
        },
        () => {
          this.toastrService.error('Erro ao deletar pagamento.');
        },
      );
  }

  filter(filters: SearchFilter): void {
    this.filters = filters;

    this.isLoadingTasks = true;

    this.retrieveTasks()
      .pipe(
        takeUntil(this.unsubscribeAll$),
        finalize(() => {
          this.isLoadingTasks = false;
        }),
      )
      .subscribe((response: HttpResponse<Task[]>) => {
        this.dataSource = response?.body;
        this.tasksLength = +response.headers.get('X-Total-Count');
      });
  }

  private sortChange(): void {
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });
  }

  private setEventListeners(): void {
    this.sortChange();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        takeUntil(this.unsubscribeAll$),
        startWith([] as Task[]),
        switchMap(() => {
          this.isLoadingTasks = true;
          return this.retrieveTasks();
        }),
        map((response) => {
          this.isLoadingTasks = false;
          this.hasError = response === null;

          if (response === null) {
            return { body: [] };
          }

          this.tasksLength = +response.headers.get('X-Total-Count');

          return response;
        }),
      )
      .subscribe((response) => {
        this.dataSource = response.body;
      });
  }

  private setDefaults(): void {
    this.displayedColumns = ['name', 'title', 'date', 'value', 'isPayed', 'actions'];
    this.isLoadingTasks = false;
    this.isLoadingTaskDelete = {};
    this.isLoadingTaskUpdate = {};
    this.hasError = false;

    this.unsubscribeAll$ = new Subject();
  }
}
