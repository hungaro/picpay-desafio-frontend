import { Component, EventEmitter, Inject, Output } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IPayment } from "../../../interfaces/payment.interface";

@Component({
    selector: 'add-modal',
    templateUrl: './add-modal.component.html',
    styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent {

    title: string;
    value: number;
    user: string;
    msg_error: string;

    constructor(
        private dialogRef: MatDialogRef<AddModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ){
        if(this.data){
            this.title = this.data.payment.title;
            this.value = this.data.payment.value;
            this.user = this.data.payment.name
        }
    }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        if(this.data){
            this.data.payment.title = this.title;
            this.data.payment.value = this.value;
            this.data.payment.name = this.user;
            this.dialogRef.close(this.data.payment);
            return;
        }

        if(this.isValid()){
            this.dialogRef.close({
                value: this.value,
                user: this.user,
                title: this.title
            })
            return;
        }

        this.msg_error = 'Preencha todos campos obrigatórios';
    }

    isValid = () => this.value && this.user;

    verifyField(): void {
        if(this.isValid()){
            this.msg_error = null;
        }
    }
}