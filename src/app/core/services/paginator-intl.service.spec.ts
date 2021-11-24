import { TestBed } from '@angular/core/testing';

import { PaginatorIntlService } from './paginator-intl.service';

describe('PaginatorIntlService', () => {
  let service: PaginatorIntlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorIntlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get range should create label', () => {
    const label = service.getRangeLabel(0, 10, 95);
    expect(label).toEqual('Página 1 de 10');
  });

  it('get range should create label if pagesize is 0', () => {
    const label = service.getRangeLabel(0, 0, 0);
    expect(label).toEqual('0 de 0');
  });
});
