import { PaymentTask } from './payment-task.model';

export interface GetPaymentTask {
  list: PaymentTask[];
  total: number;
}
