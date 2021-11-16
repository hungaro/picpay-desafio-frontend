import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/core/snackbar/snackbar.service';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.scss']
})
export class PaymentEditComponent implements OnInit {

  @Input() task: Task;

  constructor(public dialog: MatDialog, private taskService: TaskService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }

  edit(task: Task) {
    let matDialogDataConfig = {
      data: {
        title: "Editar pagamento",
        task
      }
    };

    let dialogRef = this.dialog.open(PaymentDialogComponent, matDialogDataConfig);

    dialogRef.afterClosed().subscribe(res => {

      if (res == undefined || res.event == 'cancel') {
        this.snackbarService.warning("Operação cancelada");
      }
      else {

        let taskUpdate: Task = res.task;
        task.id = res.taskId;

        this.taskService.findById(task.id)
          .subscribe(task => {

            task.date = taskUpdate.date;
            task.name = taskUpdate.name;
            task.title = taskUpdate.title;
            task.value = taskUpdate.value;

            this.taskService.update(task)
              .subscribe(

                () => {
                  this.snackbarService.success("Pagamento atualizado com sucesso");
                  window.location.reload();
                },

                (err) => {
                  console.log(err);
                  this.snackbarService.error("Erro ao editar pagamento");
                }
              );
          });


      }
    })

  }

}
