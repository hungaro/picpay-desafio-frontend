import { Component, OnInit } from '@angular/core';
import {SecurityService} from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;

    constructor(private securityService: SecurityService) {
    }

    ngOnInit() {
      this.title = 'Desafio Picpay Front-end';
      // Validar se o usuário está logado, e caso esteja, redirecionar para a listagem
      this.securityService.checkLogin();
    }
}
