import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-limit',
  templateUrl: './select-limit.component.html',
  styleUrls: ['./select-limit.component.scss']
})
export class SelectLimitComponent implements OnInit {

  public limitValues = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  @Input() limitSelect!: number;
  @Output() limitEmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}
  
  changeQuery(): void {
    this.limitEmit.emit(this.limitSelect);
  }

}
