import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

export interface SearchFilter {
  q: string;
  name: string;
  title: string;
  date: string;
  value: string;
  isPaid: string;
}

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  filters: SearchFilter;

  @Output() filtersChanged = new EventEmitter();

  @ViewChild('filterMenuTrigger') filterMenuTrigger: MatMenuTrigger;

  constructor() {
    this.setDefaults();
  }

  clearFilters(): void {
    this.filters = {
      q: '',
      name: '',
      title: '',
      date: '',
      value: '',
      isPaid: '',
    };
  }

  close(): void {
    this.filterMenuTrigger.closeMenu();
  }

  filter(): void {
    const { q, title, date, value, isPaid: isPayed, name } = this.filters;

    this.filtersChanged.emit({
      q,

      // Secondary filters
      title,
      date,
      value,
      isPayed,
      name,
    });

    this.close();
  }

  hasSomeSecondaryFilterFilled(): boolean {
    const { title, date, value, isPaid, name } = this.filters;
    return !!title || !!date || !!value || !!isPaid || !!name;
  }

  private setDefaults(): void {
    this.clearFilters();
  }
}
