import { SharedInjectorInstance } from './shared-injector-instance';

describe('SharedInjectorInstance', () => {
  beforeEach(() => {
    SharedInjectorInstance.setInjector(undefined as any);
  });

  afterEach(() => {
    SharedInjectorInstance.setInjector(undefined as any);
  });

  it('setInjector and getInjector should set and return SharedInjectorInstance', () => {
    const value = { test: 'test' };

    SharedInjectorInstance.setInjector(value as any);

    expect(SharedInjectorInstance.getInjector()).toBe(value as any);
  });
});
