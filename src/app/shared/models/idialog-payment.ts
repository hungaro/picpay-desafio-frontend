import { Ipayment } from './ipayment';

export interface IdialogPayment {

    add: boolean;
    edit: boolean;
    delete: boolean;
    payment?: Ipayment;
}
