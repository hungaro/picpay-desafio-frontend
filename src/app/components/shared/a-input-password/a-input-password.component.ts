import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'a-input-password',
  templateUrl: './a-input-password.component.html',
  styleUrls: ['./a-input-password.component.scss']
})
export class AInputPasswordComponent implements OnInit {

  @Input() inputPasswordLabel: string;
  hide: boolean = true;

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
