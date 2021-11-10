import { Task } from '@models/task.model';

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

  static generatePaymentData(payment: Partial<Task>): Partial<Task> {
    const username = (payment?.name?.split(' ')[0] ?? '').toLowerCase();

    return {
      ...payment,
      username,
    };
  }
}
