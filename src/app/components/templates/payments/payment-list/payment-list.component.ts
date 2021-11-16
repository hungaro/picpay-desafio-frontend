import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'payment-list',
  templateUrl: './payment-list.component.html',

  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnChanges {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() tasks: Task[] = [];
  dataSource: MatTableDataSource<Task> = new MatTableDataSource();
  displayedColumns: string[] = ["user", "title", "date", "value", "isPayed", "actions"];
  filteredUser: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['tasks']) {
      this.dataSource.data = this.tasks;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  onKey(event: any) {
    this.filteredUser = event.target.value
  }

  filterByNameOrUsername(filteredUser: string) {
    this.dataSource.data = this.filter(filteredUser);
  }

  filter(filteredUser: string){
    return this.tasks.filter((task) => task.name.includes(filteredUser) || task.username.includes(filteredUser))
  }
}
