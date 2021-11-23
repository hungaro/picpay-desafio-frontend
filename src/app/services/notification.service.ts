import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * Serviço de notificações, para exibir notificações de sucesso ou de erro para o usuário
 */
@Injectable()
export class NotificationService {
    constructor(private snackBar: MatSnackBar) {
    }

    // Exibir mensagem verde para o usuário, simbolizando sucesso da operação
    public success(message: string) {
        this.snackBar.open(message, undefined, {
            panelClass: ['sucess-snackbar']
        });
    }

    // Exibir mensagem vermelha para o usuário, simbolizando erro da operação
    public error(message: string) {
        this.snackBar.open(message, undefined, {
            panelClass: ['error-snackbar']
        });
    }
}
