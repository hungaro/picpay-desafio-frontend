import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-dialog',
  templateUrl: './a-dialog.component.html',
  styleUrls: ['./a-dialog.component.scss']
})
export class ADialogComponent implements OnInit {

  @Input() title: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
