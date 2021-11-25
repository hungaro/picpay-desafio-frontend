import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class PicGuard implements CanActivate, CanLoad {

    constructor(private router: Router){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.checkAccess()
    }

    canLoad(route: Route): Observable<boolean> | boolean {
        return this.checkAccess()
    }

    private checkAccess() {
       let key = sessionStorage.getItem('access')
       let access
       access = key == 'authorized' ? true : false
       access == false ?   this.router.navigateByUrl('') : null 
       return access
    }
}