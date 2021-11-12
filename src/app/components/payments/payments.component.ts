import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPayment } from '../../interfaces/payment.interface';
import { PaymentService } from '../../services/payment.service';
import { AddModalComponent } from './add-modal/add-modal.component';
import { RemoveModalComponent } from './remove-modal/remove-modal.component';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  paymentList: Array<IPayment> = [];
  inputSearch: string = '';
  pageSize: number = 10;
  page: number = 1;
  
  constructor(
    private paymentService: PaymentService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(){
    this.getList();
  }

  add(): void {
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '520px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let { value, user, title } = result;
        this.paymentService.addPayment({ value, user, title })
          .pipe(
            tap(() => {
              this.snackBar.open('Pagamento adicionado com sucesso', 'Ok');
              this.getList();
            }),
            catchError((err) => {
              console.error(err);
              this.snackBar.open('Encontramos um erro ao adicionar o pagamento', 'Ok');
              return null;
            })
          ).subscribe();
      }

    });
  }

  remove(id: number): void {

    this.paymentService.getPaymentById(id).subscribe({
      next: (payment: IPayment) => {
        const dialogRef = this.dialog.open(RemoveModalComponent, {
          width: '350px',
          data: payment[0]
        });

        dialogRef.afterClosed().subscribe({
          next: (dialogResult) => {
            if(dialogResult){
              this.paymentService.remove(id).subscribe({
                next: () => {
                  this.snackBar.open('Pagamento removido com sucesso', 'Ok');
                  this.getList();
                }, error: (err) => {
                  this.snackBar.open('Encontramos um erro ao remover o pagamento selecionado', 'Ok');
                  console.error(err);
                }
              })
            }
          }
        })
      },
      error: (err) => {
        this.snackBar.open('Encontramos um erro ao buscar o pagamento selecionado', 'Ok');
        console.error(err);
      }
    });
  }

  edit(payment: IPayment): void {
    
    const dialogRef = this.dialog.open(AddModalComponent, {
      width: '520px',
      data: { payment: payment, title: 'common.edit-payment' }
    });

    dialogRef.afterClosed().subscribe({
      next: (payment: IPayment) => {
        if(payment){
          this.paymentService.edit(payment).subscribe({
            next: () => {
              this.snackBar.open('Pagamento editado com sucesso', 'Ok');
              this.getList();
            }, error: (err) => {
              this.snackBar.open('Encontramos um erro ao editar o pagamento selecionado', 'Ok');
              console.error(err);
            }
          })
        }
      }
    });
  }

  getList(): void {
    this.paymentService.getPaymentList({ _limit: this.pageSize, username: this.inputSearch, _page: this.page }).subscribe({
      next: (list: IPayment[]) => {
        this.paymentList = list;
      }
    })
  }

  unPay(payment: IPayment): void {
    this.paymentService.payUnPay({isPayed: payment.isPayed, id: payment.id})
      .subscribe({
        next: () => {
          this.getList();
          this.snackBar.open('Pagamento editado com sucesso', 'Ok');
        }, error: (err) => {
          this.snackBar.open('Encontramos um problema ao editar o pagamento', 'Ok');
          console.error(err)
        }
      })
  }

  pay(payment: IPayment): void {
    this.paymentService.payUnPay({isPayed: payment.isPayed, id: payment.id})
      .subscribe({
        next: () => {
          this.getList();
          this.snackBar.open('Pagamento editado com sucesso', 'Ok');
        }, error: (err) => {
          this.snackBar.open('Encontramos um problema ao editar o pagamento', 'Ok');
          console.error(err)
        }
      })
  }
}
