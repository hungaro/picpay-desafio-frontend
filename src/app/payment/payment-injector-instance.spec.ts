import { PaymentInjectorInstance } from './payment-injector-instance';

describe('PaymentInjectorInstance', () => {
  beforeEach(() => {
    PaymentInjectorInstance.setInjector(undefined as any);
  });

  afterEach(() => {
    PaymentInjectorInstance.setInjector(undefined as any);
  });

  it('setInjector and getInjector should set and return PaymentInjectorInstance', () => {
    const value = { test: 'test' };

    PaymentInjectorInstance.setInjector(value as any);

    expect(PaymentInjectorInstance.getInjector()).toBe(value as any);
  });
});
