import { DialogPaymentComponent } from './../dialog-payment/dialog-payment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPaymentComponent, {
      data: {
        add: true
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        
      }
    });
  }
}
