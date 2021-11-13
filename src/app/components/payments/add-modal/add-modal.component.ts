import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";

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
    image: string = null;

    constructor(
        private dialogRef: MatDialogRef<AddModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private translate: TranslateService
    ){
        if(this.data){
            this.title = this.data.payment.title;
            this.value = this.data.payment.value;
            this.user = this.data.payment.name
            this.image = this.data.payment.image;
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
            this.data.payment.image = this.image
            this.dialogRef.close(this.data.payment);
            return;
        }

        if(this.isValid()){
            this.dialogRef.close({
                value: this.value,
                user: this.user,
                title: this.title,
                image: this.image
            })
            return;
        }

        this.msg_error = this.translate.instant('errors.type-all-required-fields');
    }

    isValid = (): boolean => !!(this.value && this.user);

    verifyField(): void {
        if(this.isValid()){
            this.msg_error = null;
        }
    }
}