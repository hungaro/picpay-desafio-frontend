import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-header-label',
  templateUrl: './a-header-label.component.html',
  styleUrls: ['./a-header-label.component.scss']
})
export class AHeaderLabelComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
