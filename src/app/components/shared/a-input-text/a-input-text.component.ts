import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'a-input-text',
  templateUrl: './a-input-text.component.html',
  styleUrls: ['./a-input-text.component.scss']
})
export class AInputTextComponent implements OnInit {

  @Input() inputTextLabel: string;
  
  @Input() set control(value: FormControl) {
    if (this.formControl !== value) {
      this.formControl = value;
    }
  }

  formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
