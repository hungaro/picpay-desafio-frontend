import { Directive, Host, Input, Optional, Renderer2, Self, ViewContainerRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Directive({
  selector: '[appCustomPaginator]'
})
export class CustomPaginatorDirective {
  @Input() showTotalPages = 2;

  private _rangeStart: number;
  private _rangeEnd: number;
  private _buttons = [];
  private _curPageObj: PageEvent = {
    length: 0,
    pageIndex: 0,
    pageSize: 0,
    previousPageIndex: 0
  };

  constructor(@Host() @Self() @Optional() private readonly matPag: MatPaginator, private vr: ViewContainerRef, private ren: Renderer2) {
    this.matPag.page.subscribe((e: PageEvent) => {
      this._curPageObj = e;
      this.initPageRange();
    });
  }

  ngAfterViewInit() {
    this.initPageRange();
  }

  private initPageRange(): void {
    this._rangeStart = Math.max(0, this._curPageObj.pageIndex - Math.floor(this.showTotalPages / 2));
    this._rangeEnd = this._rangeStart + (this.showTotalPages - 1);
    this.buildPageNumbers();
  }

  private buildPageNumbers() {
    const actionContainer = this.vr.element.nativeElement.querySelector('div.mat-paginator-range-actions');
    const nextPageNode = this.vr.element.nativeElement.querySelector('button.mat-paginator-navigation-next');
    this._buttons.forEach(button => this.ren.removeChild(actionContainer, button));
    for (let i = 0; i < this.matPag.getNumberOfPages(); i++) {
      if (i >= this._rangeStart && i <= this._rangeEnd) {
        this.ren.insertBefore(actionContainer, this.createButton(i, this.matPag.pageIndex), nextPageNode);
      }
    }
  }

  private createButton(i: any, pageIndex: number): any {
    const linkBtn: MatButton = this.ren.createElement('button');
    this.ren.addClass(linkBtn, 'app-paginator-button');
    const pagingTxt = +(i ?? 0) + 1;
    const text = this.ren.createText(pagingTxt + '');

    if (i === pageIndex) {
      this.ren.setAttribute(linkBtn, 'disabled', 'disabled');
    } else {
      this.ren.listen(linkBtn, 'click', () => this.switchPage(i));
    }

    this.ren.appendChild(linkBtn, text);
    this._buttons.push(linkBtn);
    return linkBtn;
  }

  private switchPage(i: number): void {
    const previousPageIndex = this.matPag.pageIndex;
    this.matPag.pageIndex = i;
    this.matPag['_emitPageEvent'](previousPageIndex);
    this.initPageRange();
  }
}
