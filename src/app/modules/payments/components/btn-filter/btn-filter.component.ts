import { IdialogFilter } from './../../../../shared/models/idialog-filter';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdvancedFiltersComponent } from '../advanced-filters/advanced-filters.component';

@Component({
  selector: 'app-btn-filter',
  templateUrl: './btn-filter.component.html',
  styleUrls: ['./btn-filter.component.scss']
})
export class BtnFilterComponent implements OnInit {

  @Output() returnFilter = new EventEmitter<IdialogFilter>();
  @Input() filters!: IdialogFilter;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {}

  openDialogFilter(): void {
    const dialogRef = this.dialog.open(AdvancedFiltersComponent, {
      data: {
        filters: this.filters
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.returnFilter.emit(result)
      }
    });
  }
}
