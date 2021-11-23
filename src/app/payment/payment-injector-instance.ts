import { Injector } from '@angular/core';

export class PaymentInjectorInstance {
  private static injectorInstance: Injector;

  static getInjector(): Injector {
    return this.injectorInstance;
  }

  static setInjector(injector: Injector): void {
    this.injectorInstance = injector;
  }
}
