import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Payment } from "src/app/_models/payment/payment";
import { PaymentService } from "src/app/_services/payment/payment.service";

@Component({
  selector: "pf-add-payment",
  templateUrl: "./add-payment.component.html",
  styleUrls: ["./add-payment.component.scss"],
})
export class AddPaymentComponent implements OnInit {
  payment: Payment = new Payment();

  constructor(
    public bsModalRef: BsModalRef,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.bsModalRef.hide();
  }

  savePayment(paymentFormValue: any) {
    console.log(paymentFormValue);
    this.payment = new Payment(paymentFormValue);
    this.paymentService.createPayment(this.payment).subscribe(() => {
      this.bsModalRef.hide();
    });
  }
}