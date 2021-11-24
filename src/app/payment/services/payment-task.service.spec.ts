import { TestBed } from '@angular/core/testing';
import { ApiService } from '@app/core/services/api.service';
import { of } from 'rxjs';
import { anything, capture, instance, mock, verify, when } from 'ts-mockito';
import { PaymentTaskService } from './payment-task.service';

describe('PaymentTaskService', () => {
  let service: PaymentTaskService;
  let mockApiService: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useFactory: () => instance(mockApiService)
        }
      ]
    });
  });

  beforeEach(() => {
    mockApiService = mock(ApiService);
    service = TestBed.inject(PaymentTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPaymentTaskList should list and return with total count', () => {
    let response = {
      body: [],
      headers: {
        get: (header: string) => {
          expect(header).toEqual('X-Total-Count');
          return 10;
        }
      }
    };
    let params = {};
    when(mockApiService.get(anything(), anything(), anything())).thenReturn(of(response));
    service.getPaymentTaskList(params as any).subscribe(data => expect(data).toEqual({ list: response.body, total: 10 }));
    verify(mockApiService.get(anything(), anything(), anything())).once();
    expect(capture(mockApiService.get).last()).toEqual([
      (service as any).apiUrl,
      params,
      { showLoading: true, defaultErrorHandling: true, fullResponse: true }
    ]);
  });

  it('savePaymentTask create and return the data', () => {
    let response = {
      id: 2,
      name: 'Foster Orthmann',
      username: 'forthmann1',
      title: 'Professor',
      value: 207.36,
      date: '2021-01-28T14:01:29Z',
      image: 'https://robohash.org/quasetqui.png?size=150x150&set=set1',
      isPayed: true
    };
    let body = {
      name: 'Foster Orthmann',
      username: 'forthmann1',
      title: 'Professor',
      value: 207.36,
      date: '2021-01-28T14:01:29Z',
      image: 'https://robohash.org/quasetqui.png?size=150x150&set=set1',
      isPayed: true
    };
    when(mockApiService.post(anything(), anything(), anything())).thenReturn(of(response));
    service.savePaymentTask(body as any).subscribe(data => expect(data).toEqual(response));
    verify(mockApiService.post(anything(), anything(), anything())).once();
    expect(capture(mockApiService.post).last()).toEqual([(service as any).apiUrl, body, { showLoading: true, defaultErrorHandling: true }]);
  });

  it('update update and return the data', () => {
    let response = {
      id: 2,
      name: 'Foster Orthmann',
      username: 'forthmann1',
      title: 'Professor',
      value: 207.36,
      date: '2021-01-28T14:01:29Z',
      image: 'https://robohash.org/quasetqui.png?size=150x150&set=set1',
      isPayed: true
    };
    let body = {
      id: 2,
      name: 'Foster Orthmann',
      username: 'forthmann1',
      title: 'Professor',
      value: 207.36,
      date: '2021-01-28T14:01:29Z',
      image: 'https://robohash.org/quasetqui.png?size=150x150&set=set1',
      isPayed: true
    };
    when(mockApiService.patch(anything(), anything(), anything())).thenReturn(of(response));
    service.updatePaymentTask(body as any).subscribe(data => expect(data).toEqual(response));
    verify(mockApiService.patch(anything(), anything(), anything())).once();
    expect(capture(mockApiService.patch).last()).toEqual([
      `${(service as any).apiUrl}/${body.id}`,
      body,
      { showLoading: true, defaultErrorHandling: true }
    ]);
  });

  it('delete should remove item', () => {
    const id = 10;
    when(mockApiService.delete(anything(), anything())).thenReturn(of(true));
    service.deletePaymentTask(id).subscribe(data => expect(data).toEqual(true));
    verify(mockApiService.delete(anything(), anything())).once();
    expect(capture(mockApiService.delete).last()).toEqual([
      `${(service as any).apiUrl}/${id}`,
      { showLoading: true, defaultErrorHandling: true }
    ]);
  });
});
