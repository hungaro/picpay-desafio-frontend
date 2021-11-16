import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/core/snackbar/snackbar.service';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.scss']
})
export class PaymentAddComponent implements OnInit {

  constructor(public dialog: MatDialog, private taskService: TaskService, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
  }

  openAddDialog() {

    let matDialogDataConfig = {
      data: {
        title: "Adicionar pagamento",
        task: {
          id: 0,
          name: '',
          username: '',
          title: '',
          value: 0,
          date: undefined,
          image: '',
          isPayed: false
        }
      }
    };

    let dialogRef = this.dialog.open(PaymentDialogComponent, matDialogDataConfig);

    dialogRef.afterClosed().subscribe(res => {

      if (res == undefined || res.event == 'cancel') {
        this.snackbarService.warning("Operação cancelada");
      }
      else {

        let task: Task = res.task;
        
        this.taskService.save(task)
          .subscribe(

            () => {
              this.snackbarService.success("Pagamento salvo com sucesso");
              
              window.location.reload();
            },

            (err) => {
              console.log(err);
              this.snackbarService.error("Erro ao salvar pagamento");
            }
          );
      }

    })

  }

}
