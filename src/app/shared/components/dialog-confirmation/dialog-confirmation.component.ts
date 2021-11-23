import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedInjectorInstance } from '@app/shared/shared-injector-instance';

export interface DialogData {
  message: string;
  title?: string;
  yesCallback?: (dialogRef: MatDialogRef<DialogConfirmationComponent, boolean>) => boolean;
  noCallback?: (dialogRef: MatDialogRef<DialogConfirmationComponent, boolean>) => boolean;
}

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss']
})
export class DialogConfirmationComponent {
  constructor(private dialogRef: MatDialogRef<DialogConfirmationComponent, boolean>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  static open(data: DialogData): MatDialogRef<DialogConfirmationComponent, boolean> {
    const dialog: MatDialog = SharedInjectorInstance.getInjector().get<MatDialog>(MatDialog);

    return dialog.open(DialogConfirmationComponent, { data, disableClose: true });
  }

  yesClick() {
    if (!this.data.yesCallback || this.data.yesCallback(this.dialogRef)) {
      this.dialogRef.close(true);
    }
  }

  noClick() {
    if (!this.data.noCallback || this.data.noCallback(this.dialogRef)) {
      this.dialogRef.close(false);
    }
  }
}
