import { Component, Input, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { Account, IAccount } from "../../interfaces/account.interface";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    user: IAccount = new Account();
    pwd: string = '';
    pwdConfirm: string = '';
    dismatch: boolean = false;

    constructor(
        private _bottomSheet: MatBottomSheet
    ){}

    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('auth'));
    }

    onSave(): void {
        if(this.pwd === this.pwdConfirm){
            this.user.password = this.pwd;
            this.dismatch = false;
            this._bottomSheet.dismiss(this.user);
        } else {
            this.dismatch = true;
        }
    }
}