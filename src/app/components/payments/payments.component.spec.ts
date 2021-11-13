import { of, throwError } from "rxjs";
import { IPayment } from "../../interfaces/payment.interface";
import { PaymentsComponent } from "./payments.component";

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;

  let paymentService, dialog, snackBar, translate;

  let payment: IPayment = {
    date: '2021-11-11T11:24:55',
    id: 1,
    image: 'path/to/image',
    isPayed: true,
    name: 'Bruno Lins',
    title: 'Front-End Developer',
    username: '@idevnotes',
    value: 1177
  }

  beforeEach(() => {
      paymentService = jasmine.createSpyObj('PaymentService', ['getPaymentList', 'addPayment', 'payUnPay', 'getPaymentById', 'remove', 'edit'])
      dialog = jasmine.createSpyObj('MatDialog', ['open']);
      snackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
      translate = jasmine.createSpyObj('TranslateService', ['instant']);

      paymentService.getPaymentList.and.returnValue(of([payment]))
      paymentService.addPayment.and.returnValue(of(payment))
      paymentService.payUnPay.and.returnValue(of(payment))
      paymentService.getPaymentById.and.returnValue(of([payment]))
      paymentService.remove.and.returnValue(of({}))
      paymentService.edit.and.returnValue(of(payment))

      dialog.open.and.returnValue({
        afterClosed: () => of({ value: 10, user: 'Bruno Lins', title: 'Front-End Developer', image: 'link da imagem' })
      });

      component = new PaymentsComponent(paymentService, dialog, snackBar, translate);
  });

  it('should create the component', () => expect(component).toBeTruthy());

  it('should call the ngOnInit method', () => {
    expect(() => {
      component.ngOnInit();
    }).not.toThrow();
  })

  it('should call the add method', () => {
    expect(() => {
      component.add();
    }).not.toThrow();
  })

  it('should call the remove method', () => {
    expect(() => {
      component.remove(payment);
    }).not.toThrow();
  })

  it('should call the edit method', () => {
    expect(() => {
      component.edit(payment);
    }).not.toThrow();
  })

  it('should call the getList method', () => {
    expect(() => {
      component.getList();
    }).not.toThrow();
  })

  it('should call the unPay method', () => {
    expect(() => {
      component.unPay(payment);
    }).not.toThrow();
  })

  it('should call the pay method', () => {
    expect(() => {
      component.pay(payment);
    }).not.toThrow();
  })
})

describe('PaymentsComponent errors', () => {
  let component: PaymentsComponent;

  let paymentService, dialog, snackBar, translate;

  let payment: IPayment;

  beforeEach(() => {
      paymentService = jasmine.createSpyObj('PaymentService', ['getPaymentList', 'addPayment', 'payUnPay', 'getPaymentById', 'remove', 'edit'])
      dialog = jasmine.createSpyObj('MatDialog', ['open']);
      snackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
      translate = jasmine.createSpyObj('TranslateService', ['instant']);

      paymentService.addPayment.and.returnValue(throwError({ error: true }));
      paymentService.remove.and.returnValue(throwError({ error: true }));
      paymentService.edit.and.returnValue(throwError({ error: true }));
      paymentService.getPaymentList.and.returnValue(throwError({ error: true }));
      paymentService.payUnPay.and.returnValue(throwError({ error: true }));

      dialog.open.and.returnValue({
        afterClosed: () => of({ value: 10, user: 'Bruno Lins', title: 'Front-End Developer', image: 'link da imagem' })
      });

      payment = {
        date: '2021-11-11T11:24:55',
        id: 1,
        image: 'path/to/image',
        isPayed: true,
        name: 'Bruno Lins',
        title: 'Front-End Developer',
        username: '@idevnotes',
        value: 1177
      }

      component = new PaymentsComponent(paymentService, dialog, snackBar, translate);
  });

  it('should call the add method', () => {

    component.add();

    expect(snackBar.open).toHaveBeenCalledWith('Encontramos um erro ao adicionar o pagamento', 'Ok');
  });

  it('should call the remove method', () => {
    expect(() => {
      component.remove(payment);
    }).not.toThrow()
  });

  it('should call the edit method', () => {
    expect(() => {
      component.edit(payment);
    }).not.toThrow()
  });

  it('should call the getList method', () => {
    expect(() => {
      component.getList();
    }).not.toThrow()
  });

  it('should call the unPay method', () => {
    expect(() => {
      component.unPay(payment);
    }).not.toThrow()
  });

  it('should call the pay method', () => {
    expect(() => {
      component.pay(payment);
    }).not.toThrow()
  });
})