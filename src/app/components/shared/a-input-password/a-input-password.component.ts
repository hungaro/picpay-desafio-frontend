import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-input-password',
  templateUrl: './a-input-password.component.html',
  styleUrls: ['./a-input-password.component.scss']
})
export class AInputPasswordComponent implements OnInit {

  @Input() inputPasswordLabel: string;
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}