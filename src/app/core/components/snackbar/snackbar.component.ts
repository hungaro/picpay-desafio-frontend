import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface SnackbarData {
  html: string;
  action: 'success' | 'error' | 'info';
}
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  icons = { success: 'check_circle', error: 'cancel', info: '' };
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData, private snackRef: MatSnackBarRef<SnackbarComponent>) {}
  dismiss = () => this.snackRef.dismiss();
}
