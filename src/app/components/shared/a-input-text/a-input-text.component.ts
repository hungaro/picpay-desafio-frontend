import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-input-text',
  templateUrl: './a-input-text.component.html',
  styleUrls: ['./a-input-text.component.scss']
})
export class AInputTextComponent implements OnInit {

  @Input() inputTextLabel: string;

  constructor() { }

  ngOnInit(): void {
  }

}
