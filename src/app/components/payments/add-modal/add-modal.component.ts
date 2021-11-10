import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'add-modal',
    templateUrl: './add-modal.component.html',
    styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent {

    title: string;
    date: string;
    value: number;
    user: string;
    msg_error: string;

    constructor(
        private dialogRef: MatDialogRef<AddModalComponent>
        // public dialogRef: MatDialogRef<AddModalComponent>,
        // @Inject(MAT_DIALOG_DATA) public data,
    ){}

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        if(this.isValid()){
            console.log('requisitar')
            return;
        }

        this.msg_error = 'Preencha todos campos obrigatórios';
    }

    isValid = () => this.date && this.value && this.user;

    verifyField(): void {
        if(this.isValid()){
            this.msg_error = null;
        }
    }
}