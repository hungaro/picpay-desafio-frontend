import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/core/snackbar/snackbar.service';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { PaymentDialogDeleteComponent } from '../payment-dialog-delete/payment-dialog-delete.component';



@Component({
  selector: 'payment-delete',
  templateUrl: './payment-delete.component.html',
  styleUrls: ['./payment-delete.component.scss']
})
export class PaymentDeleteComponent implements OnInit {

  @Input() task: Task;

  constructor(public dialog: MatDialog, private taskService: TaskService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }

  delete(task: Task) {
    
    let matDialogDataConfig = {
      data: {
        title: "Excluir pagamento",
        task
      }
    };

    let dialogRef = this.dialog.open(PaymentDialogDeleteComponent, matDialogDataConfig);

    dialogRef.afterClosed().subscribe(res => {

      if (res.event == 'cancel') {
        this.snackbarService.warning("Operação cancelada");
      }
      else {

        let task: Task = res.task;

        this.taskService.delete(task.id)
          .subscribe(

            () => {
              this.snackbarService.success("Pagamento excluído com sucesso");
              window.location.reload();
            },

            (err) => {
              console.log(err);
              this.snackbarService.error("Erro ao excluir pagamento");
            }
          );
      }
    })

  }

}