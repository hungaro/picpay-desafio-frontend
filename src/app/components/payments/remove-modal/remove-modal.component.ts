import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'remove-modal',
    templateUrl: './remove-modal.component.html',
    styleUrls: ['./remove-modal.component.scss']
})
export class RemoveModalComponent {
    constructor(
        public dialogRef: MatDialogRef<RemoveModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
    ){}

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        this.dialogRef.close(true);
    }
}