import { IPayment } from "../../interfaces/payment.interface";
import { PaymentTableComponent } from "./payment-table.component";

describe('PaymentTableComponent', () => {
  let component: PaymentTableComponent;
  let _liveAnnouncer;

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
      _liveAnnouncer = jasmine.createSpyObj('LineAnnouncer', ['announce'])
      component = new PaymentTableComponent(_liveAnnouncer);
  });

  it('should create the component', () => expect(component).toBeTruthy());

  it('should call the ngAfterViewInit method', () => {
    expect(() => {
      component.ngAfterViewInit();
    }).not.toThrow();
  });

  it('should call the announceSortChange method with direction', () => {
    expect(() => {
      component.announceSortChange({
        active: 'active',
        direction: 'desc'
      });
    }).not.toThrow();
  });

  it('should call the announceSortChange method without direction', () => {
    expect(() => {
      component.announceSortChange({
        active: 'active',
        direction: null
      });
    }).not.toThrow();
  });

  it('should call the remove method', () => {
    spyOn(component.remove$, 'emit')

    component.remove(payment);

    expect(component.remove$.emit).toHaveBeenCalledWith(payment)
  });

  it('should call the edit method', () => {
    spyOn(component.edit$, 'emit')
    let pay: IPayment = {
      date: '2021-11-11T11:24:55',
      id: 1,
      image: 'path/to/image',
      isPayed: true,
      name: 'Bruno Lins',
      title: 'Front-End Developer',
      username: '@idevnotes',
      value: 1177
    }
    component.edit(pay);

    expect(component.edit$.emit).toHaveBeenCalledWith(pay);
  });

  it('should call the pay method', () => {
    spyOn(component.pay$, 'emit')
    let pay: IPayment = {
      date: '2021-11-11T11:24:55',
      id: 1,
      image: 'path/to/image',
      isPayed: false,
      name: 'Bruno Lins',
      title: 'Front-End Developer',
      username: '@idevnotes',
      value: 1177
    }

    component.pay(pay);

    expect(component.pay$.emit).toHaveBeenCalledWith(pay);
  });

  it('should call the unpay method', () => {
    spyOn(component.unPay$, 'emit')
    let pay: IPayment = {
      date: '2021-11-11T11:24:55',
      id: 1,
      image: 'path/to/image',
      isPayed: true,
      name: 'Bruno Lins',
      title: 'Front-End Developer',
      username: '@idevnotes',
      value: 1177
    }

    component.unPay(pay);

    expect(component.unPay$.emit).toHaveBeenCalledWith(pay);
  });
})