import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../../services/data.service';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-payment-delete-dialog',
    templateUrl: 'payment-delete-dialog.component.html',
    styleUrls: ['payment-delete-dialog.component.css']
})
export class PaymentDeleteDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<PaymentDeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dataService: DataService
    ) {
    }

    close(): void {
        // fechar o modal
        this.dialogRef.close();
    }

    delete() {
        // excluir o registro selecionado
        this.dataService.delete('tasks', this.data.id).pipe(finalize(() => this.close())).subscribe();
    }
}
