import { Payment } from '@models/payment.model';

export class Utils {
  static omit(obj: any, field: string): any {
    return Object.keys(obj ?? {}).reduce((resultObj: any, key: string) => {
      let nextObj = {};

      if (key !== field) {
        nextObj = {
          [key]: obj[key],
        };
      }

      return {
        ...resultObj,
        ...nextObj,
      };
    }, {});
  }

  static generatePaymentData(payment: Partial<Payment>): Partial<Payment> {
    const username = (payment?.name?.split(' ')[0] ?? '').toLowerCase();

    return {
      ...payment,
      username,
    };
  }

  static isEmptyList(value: any): boolean {
    return typeof value === 'object' && Array.isArray(value) && value.length === 0;
  }

  static isEmptyObject(value: any): boolean {
    return typeof value === 'object' && Object.keys(value).length === 0;
  }

  static isUndefined(value: any): boolean {
    return value === undefined;
  }

  static isNull(value: any): boolean {
    return value === null;
  }

  static isEmpty(value: any): boolean {
    return (
      value === '' ||
      this.isNull(value) ||
      this.isUndefined(value) ||
      this.isEmptyList(value) ||
      this.isEmptyObject(value)
    );
  }
}
