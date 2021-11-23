import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService, EntityBase} from '../../services/data.service';
import {NotificationService} from '../../services/notification.service';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-payment-form',
    templateUrl: 'payment-form.component.html',
    styleUrls: ['payment-form.component.css']
})
export class PaymentFormComponent implements OnInit{
    // Entidade a ser salva
    private entity: EntityBase;

    // FormGroup da entidade que será salva
    formGroup: FormGroup = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required ]),
        username: new FormControl(''),
        title: new FormControl('', [Validators.required]),
        value: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        image: new FormControl(''),
        isPayed: new FormControl(''),
    });

    constructor(
        public dialogRef: MatDialogRef<PaymentFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dataService: DataService,
        private notificationService: NotificationService
    ) {
    }

    ngOnInit(): void {
        // Caso possua uma entity, setar no form
        if (this.data) {
            this.formGroup.setValue(this.data);
        }
    }

    close(): void {
        // Fechar o modal
        this.dialogRef.close();
    }

    save() {
        // Caso o form esteja valido, salvar
        if (this.formGroup.valid) {
            this.entity = this.formGroup.value;
            this.dataService.save('tasks', this.entity).pipe(finalize(() => {
                if (this.entity.id) {
                    this.notificationService.success('O registro foi editado com sucesso');
                } else {
                    this.notificationService.success('O registro foi incluído com sucesso');
                }
                this.close();
            })).subscribe();
        } else {
            // Notificar o usuário para corrigir os erros do form
            this.notificationService.error('Corrija os erros no formulário antes de salvar');
        }
    }
}
