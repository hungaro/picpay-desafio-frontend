import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CanActivate, Router } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RoutesGuard implements CanActivate {

    constructor(
        private router: Router,
        private snackBar: MatSnackBar
    ){}

    canActivate(): Observable<boolean> {
        let auth = JSON.parse(sessionStorage.getItem('auth'));

        if(auth){
            return of(true);
        }

        this.openSnackBar('Perca de sessão, favor realizar login novamente', 'Ok')
        this.router.navigate(['/']);
        return of(false);
    }

    openSnackBar(message: string, action: string): void {
        this.snackBar.open(message, action);
      }
}