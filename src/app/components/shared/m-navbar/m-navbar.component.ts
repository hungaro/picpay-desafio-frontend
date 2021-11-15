import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

const APP_TITLE = environment.appTitle;
const APP_SUBTITLE = environment.appSubtitle;

@Component({
  selector: 'm-navbar',
  templateUrl: './m-navbar.component.html',
  styleUrls: ['./m-navbar.component.scss']
})
export class MNavbarComponent implements OnInit {

  title: string = APP_TITLE;
  subtitle: string = APP_SUBTITLE;
  
  constructor() { }

  ngOnInit(): void {
  }

}
