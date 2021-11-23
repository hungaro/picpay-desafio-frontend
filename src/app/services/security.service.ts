import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {NotificationService} from './notification.service';

/**
 * Serviço de segurança da aplicação, responsável por validar a autenticação do usuário
 */
@Injectable()
export class SecurityService {
    constructor(private http: HttpClient,
                private router: Router,
                private notificationService: NotificationService) {
    }

    // Realizar o login do usuário
    public login(username: string, password: string) {
        // Criptografar a senha antes de enviar para o backend
        const salt = bcrypt.genSaltSync(10);
        const pass = bcrypt.hashSync(password, salt);
        const usuario = {
            email: username,
            password: pass
        };

        // Realizar o login e salvar o token existente
        // Detalhe importante: O Login está sendo realizado com uma API chamada json-server-auth
        this.http.post<any>('http://localhost:3000/login', usuario).pipe(tap(data => {
            localStorage.setItem('TOKEN', data.accessToken);
            localStorage.setItem('USER', data.user);
            this.notificationService.success('Login realizado com sucesso');
        })).subscribe(data => console.log(data), err => this.notificationService.error(err.message));
    }

    // Validar se existe um token válido
    // TODO: validar se o token expirou
    public checkLogin() {
       const token = localStorage.getItem('TOKEN');

       // Caso não exista um token, navegar para o login
       if (!token) {
           this.router.navigate(['']);
       }
    }

    // Função de logout do token
    public logout() {
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('USER');
        this.router.navigate(['']);
    }
}
