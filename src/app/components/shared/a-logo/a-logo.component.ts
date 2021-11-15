import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-logo',
  templateUrl: './a-logo.component.html',
  styleUrls: ['./a-logo.component.scss']
})
export class ALogoComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() isLoginPage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
