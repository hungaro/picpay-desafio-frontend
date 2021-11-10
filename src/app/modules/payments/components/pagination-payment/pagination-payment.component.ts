import { PagerService } from './../../../../core/services/pager/pager.service';
import { Ipagination } from './../../../../shared/models/ipagination';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-payment',
  templateUrl: './pagination-payment.component.html',
  styleUrls: ['./pagination-payment.component.scss']
})
export class PaginationPaymentComponent implements OnInit {

  @Input() currentPage: number;
  @Input() limit!: number;
  @Input() totalPayments!: number;
  @Output() pageEmit = new EventEmitter<number>();
  public pager!: Ipagination;

  constructor(
    private pagerService: PagerService
  ) { }

  ngOnInit(): void {
    this.createPages(this.currentPage)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.limit) {
      this.createPages(this.currentPage)
    }
  }

  createPages(page: number): void {
    if(page < 1 || page > this.pager?.totalPages) {
      return;
  } 

    this.pager = this.pagerService.getPager(this.totalPayments, page, this.limit);
  }

  setPage(page: number) {
    this.createPages(page);
    this.pageEmit.emit(page);
  }
}
