import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../services/security.service';
import {NotificationService} from '../services/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    // FormGroup do login
    formGroup: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required ]),
        password: new FormControl('', [Validators.required, Validators.min(3) ])
    });

    // propriedade para esconder o password
    hide = true;

    constructor(private securityService: SecurityService,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.securityService.checkLogin();
    }

    login() {
        // Caso o formulário esteja preenchido corretamente, realizar o login
        if (this.formGroup.valid) {
            this.securityService.login(this.formGroup.value.email, this.formGroup.value.password);
            return false;
        } else {
            // Caso exista algum erro, notificar o usuário
            this.notificationService.error('Corrija os erros no formulário antes de salvar');
        }
    }
}
