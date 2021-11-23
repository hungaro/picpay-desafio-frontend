import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent, SnackbarData } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    this.showSnack(message, 'success');
  }

  showError(message = 'Erro inesperado') {
    this.showSnack(message, 'error');
  }

  showInfo(message: string) {
    this.showSnack(message, 'info');
  }

  showSnack(message: string, panelClass: 'success' | 'error' | 'info') {
    const config = new MatSnackBarConfig<SnackbarData>();
    config.panelClass = ['app-snackbar', panelClass];
    config.duration = 3000;
    config.horizontalPosition = 'center';
    config.data = {
      html: message,
      action: panelClass
    };

    this.snackBar.openFromComponent(SnackbarComponent, config);
  }

  dismiss = (): void => this.snackBar.dismiss();
}
