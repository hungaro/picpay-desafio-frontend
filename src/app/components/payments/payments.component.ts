import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPayment } from '../../interfaces/payment.interface';
import { PaymentService } from '../../services/payment.service';
import { AddModalComponent } from './add-modal/add-modal.component';
import { RemoveModalComponent } from './remove-modal/remove-modal.component';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

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
  filterRange: boolean = false;
  isPayedFilter: boolean = null;
  endDateSelected: string = '';
  startDateSelected: string = ''
  
  constructor(
    private paymentService: PaymentService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private _bottomSheet: MatBottomSheet
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
        let { value, user, title, image } = result;
        this.paymentService.addPayment({ value, user, title, image })
          .pipe(
            tap(() => {
              this.snackBar.open(
                this.translate.instant('payments.payment-add-success'), 
                this.translate.instant('common.ok')
              );
              this.getList();
            }),
            catchError((err) => {
              console.error(err);
              this.snackBar.open(
                this.translate.instant('errors.we-found-errors-payment'),
                this.translate.instant('common.ok')
              );
              return throwError(err);
            })
          ).subscribe();
      }

    });
  }

  remove(payment: IPayment): void {
    const dialogRef = this.dialog.open(RemoveModalComponent, {
      width: '350px',
      data: payment
    });

    dialogRef.afterClosed().subscribe({
      next: (dialogResult) => {
        if(dialogResult){
          this.paymentService.remove(payment.id).subscribe({
            next: () => {
              this.snackBar.open(
                this.translate.instant('payments.payment-removed-success'),
                this.translate.instant('common.ok')
              );
              this.getList();
            }, error: (err) => {
              this.snackBar.open(
                this.translate.instant('errors.we-found-errors-removing-payment'),
                this.translate.instant('common.ok')
              );
              console.error(err);
            }
          })
        }
      }
    })
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
              this.snackBar.open(
                this.translate.instant('payments.edited-success'),
                this.translate.instant('common.ok')
              );
              this.getList();
            }, error: (err) => {
              this.snackBar.open(
                this.translate.instant('errors.we-found-errors-editing-payment'),
                this.translate.instant('common.ok')
              );
              console.error(err);
            }
          })
        }
      }
    });
  }

  getList(isPayed?): void {
    this.isPayedFilter = isPayed ? isPayed : this.isPayedFilter;
    
    this.paymentService.getPaymentList({
        _limit: this.pageSize,
        username: this.inputSearch,
        _page: this.page,
        isPayed: this.isPayedFilter,
       startDate: this.startDateSelected,
       endDate: this.endDateSelected 
      }).subscribe({
        next: (list: IPayment[]) => {
          this.paymentList = list;
        },
        error: (err) => {
          console.error(err);
          this.snackBar.open(
            this.translate.instant('errors.we-found-errors-searching-payment-list'),
            this.translate.instant('common.ok')
          );
        }
      })
  }

  unPay(payment: IPayment): void {
    this.paymentService.payUnPay({isPayed: payment.isPayed, id: payment.id})
      .subscribe({
        next: () => {
          this.getList();
          this.snackBar.open(
            this.translate.instant('payments.edited-success'),
            this.translate.instant('common.ok')
          );
        }, error: (err) => {
          this.snackBar.open(
            this.translate.instant('errors.we-found-errors-editing-payment'),
            this.translate.instant('common.ok')
          );
          console.error(err)
        }
      })
  }

  pay(payment: IPayment): void {
    this.paymentService.payUnPay({isPayed: payment.isPayed, id: payment.id})
      .subscribe({
        next: () => {
          this.getList();
          this.snackBar.open(
            this.translate.instant('payments.edited-success'),
            this.translate.instant('common.ok')
          );
        }, error: (err) => {
          this.snackBar.open(
            this.translate.instant('errors.we-found-errors-editing-payment'),
            this.translate.instant('common.ok')
          );
          console.error(err)
        }
      })
  }

  logout(): void {
    sessionStorage.removeItem('auth');
    this.snackBar.open(
      this.translate.instant('payments.logout'),
      this.translate.instant('common.ok')
    )
  }

  filter(): void {
    const bottomSheetRef = this._bottomSheet.open(FilterModalComponent);

    bottomSheetRef.afterDismissed().subscribe((result: number) => {
      if(result === Filter.PaymentByRange) {
        this.filterRange = true;
        return;
      }

      if(result === Filter.PaymentNotMade) {
        this.getList({ isPayed: false });
        return;
      }

      if(result === Filter.PaymentMade) {
        this.getList({ isPayed: true });
        return;
      }

      if(result === Filter.CleanAllFilters) {
        this.filterRange = false;
        this.isPayedFilter = null;
        this.page = 1
        this.pageSize = 10;
        this.inputSearch = null;
        this.getList();
        return;
      }
    });
  }

  startDate(date: string): void {
    this.startDateSelected = date;
    if(this.endDateSelected){
      this.getList();
      this.endDateSelected = ''
    }
  }

  endDate(date: string): void {
    this.endDateSelected = date;
    if(this.startDateSelected){
      this.getList();
      this.startDateSelected = ''
    }
  }
}

enum Filter {
  PaymentNotMade = 1,
  PaymentMade = 2,
  PaymentByRange = 3,
  CleanAllFilters = 4
}
