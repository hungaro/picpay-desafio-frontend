import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { StyleClassSnackBar } from './style-class-snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    duration: number = 5 * 1000; // 5 seconds

    constructor(private _snackBar: MatSnackBar) { }

    active(message: string, styleClassSnackBar: StyleClassSnackBar){
        this._snackBar.open(message, 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.duration,
            panelClass: [styleClassSnackBar]
        });
    }

    success(message: string) {
        this.active(message, StyleClassSnackBar.SUCCESS);
    }

    error(message: string) {
        this.active(message, StyleClassSnackBar.ERROR);
    }

    warning(message: string) {
        this.active(message, StyleClassSnackBar.WARNING);
    }
}
