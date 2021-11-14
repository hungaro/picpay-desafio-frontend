import { of } from "rxjs";
import { IPayment } from "../../interfaces/payment.interface";
import { PaymentService } from "../payment.service";

describe('PaymentService', () => {
    let service: PaymentService;
    let http;

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
        http = jasmine.createSpyObj('HttpClient', ['get', 'post', 'patch', 'put', 'delete'])
        http.get.and.returnValue(of([payment]));
        http.post.and.returnValue(of(payment));
        http.put.and.returnValue(of(payment));
        http.delete.and.returnValue(of({}));
        http.patch.and.returnValue(of(payment));

        service = new PaymentService(http);
    });

    it('should create service', () => expect(service).toBeTruthy());

    it('should test the getPaymentList method', () => {
        service.getPaymentList({
            _limit: '10',
            inputSearch: 'Bruno Lins',
            _page: '1',
            username: '@idevnotes',
            startDate: '2021-11-12T00:00:00Z',
            endDate: '2021-11-12T00:00:00Z',
            isPayed: true
        }).subscribe({
            next: (list: IPayment[]) => {
                expect(list).not.toBe(null);
            }
        })
    });

    it('should test the addPayment method', () => {
        service.addPayment({
            value: 10,
            user: 'Bruno Lins',
            title: 'Front-End Developer',
            image: 'link/to/image'
        }).subscribe({
            next: (pay: IPayment) => {
                expect(pay).not.toBe(null);
            }
        })
    });

    it('should test the payUnPay method', () => {
        service.payUnPay({
            isPayed: true,
            id: 1
        }).subscribe({
            next: (pay: IPayment) => {
                expect(pay).not.toBe(null)
            }
        })
    });

    it('should test the getPaymentById method', () => {
        service.getPaymentById(1).subscribe({
            next: (pay: IPayment) => {
                expect(pay).not.toBe(null);
            }
        })
    });

    it('should test the remove method', () => {
        service.remove(1).subscribe({
            next: (pay) => {
                expect(pay).toEqual({});
            }
        })
    });

    it('should test the edit method', () => {
        service.edit(payment).subscribe({
            next: (pay: IPayment) => {
                expect(pay).not.toBe(null);
            }
        })
    });
})