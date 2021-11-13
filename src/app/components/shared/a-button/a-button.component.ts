import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-button',
  templateUrl: './a-button.component.html',
  styleUrls: ['./a-button.component.scss']
})
export class AButtonComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  click(){

  }

}
