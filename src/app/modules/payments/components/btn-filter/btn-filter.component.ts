import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdvancedFiltersComponent } from '../advanced-filters/advanced-filters.component';

@Component({
  selector: 'app-btn-filter',
  templateUrl: './btn-filter.component.html',
  styleUrls: ['./btn-filter.component.scss']
})
export class BtnFilterComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialogFilter(): void {
    const dialogRef = this.dialog.open(AdvancedFiltersComponent, {
      data: {
        // add: true
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {}
    });
  }
}
