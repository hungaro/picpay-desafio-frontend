import { HttpClient, HttpParams } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { anything, capture, instance, mock, spy, verify, when } from 'ts-mockito';
import { ApiOptions, ApiService } from './api.service';
import { LoadingService } from './loading.service';
import { SnackbarService } from './snackbar.service';

describe('ApiService', () => {
  let service: ApiService;
  let spyService: ApiService;

  let mockHttp: HttpClient;
  let mockLoading: LoadingService;
  let mockSnackbar: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useFactory: () => instance(mockHttp)
        },
        {
          provide: LoadingService,
          useFactory: () => instance(mockLoading)
        },
        {
          provide: SnackbarService,
          useFactory: () => instance(mockSnackbar)
        }
      ]
    });
  });

  beforeEach(() => {
    mockHttp = mock(HttpClient);
    mockLoading = mock(LoadingService);
    mockSnackbar = mock(SnackbarService);

    service = TestBed.inject(ApiService);

    spyService = spy(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get should call HttpClient', () => {
    const path = 'path';
    const params = { myParam: 'param' };
    const httpParams = new HttpParams({ fromObject: params });
    when(mockHttp.get(anything(), anything())).thenReturn(of());
    when(spyService.handleDefaultOptions(anything())).thenReturn(source => source);

    const observable = service.get(path, params, { showLoading: true, defaultErrorHandling: true });

    expect(observable instanceof Observable).toBeTruthy();
    verify(mockHttp.get(`${Environment.apiUrl}${path}`, anything())).called();

    expect(capture(mockHttp.get).last()).toEqual([`${Environment.apiUrl}${path}`, { params: httpParams, observe: 'body' }]);
    verify(spyService.handleDefaultOptions(anything())).called();
  });

  it('get should call HttpClient and return full response', () => {
    const path = 'path';
    const params = { myParam: 'param' };
    const httpParams = new HttpParams({ fromObject: params });
    when(mockHttp.get(anything(), anything())).thenReturn(of());
    when(spyService.handleDefaultOptions(anything())).thenReturn(source => source);

    const observable = service.get(path, params, { showLoading: true, defaultErrorHandling: true, fullResponse: true });

    expect(observable instanceof Observable).toBeTruthy();
    verify(mockHttp.get(`${Environment.apiUrl}${path}`, anything())).called();

    expect(capture(mockHttp.get).last()).toEqual([`${Environment.apiUrl}${path}`, { params: httpParams, observe: 'response' }]);
    verify(spyService.handleDefaultOptions(anything())).called();
  });

  it('get should call HttpClient without params', () => {
    const path = 'path';
    const httpParams = new HttpParams({ fromObject: {} });
    when(mockHttp.get(anything(), anything())).thenReturn(of());
    when(spyService.handleDefaultOptions(anything())).thenReturn(source => source);
    const observable = service.get(path);
    expect(observable instanceof Observable).toBeTruthy();
    verify(mockHttp.get(`${Environment.apiUrl}${path}`, anything())).called();

    expect(capture(mockHttp.get).last()).toEqual([`${Environment.apiUrl}${path}`, { params: httpParams, observe: 'body' }]);
    verify(spyService.handleDefaultOptions(anything())).called();
  });

  it('post should call HttpClient', () => {
    const path = 'path';
    const body = 'myParams';
    const paramsNew = new HttpParams();
    when(mockHttp.post(anything(), anything())).thenReturn(of());
    when(spyService.handleDefaultOptions(anything())).thenReturn(source => source);

    const obs = service.post(path, body);

    expect(obs instanceof Observable).toBeTruthy();

    verify(spyService.handleDefaultOptions(anything())).times(1);
    verify(mockHttp.post(`${Environment.apiUrl}${path}`, body)).times(1);
  });

  it('put should call HttpClient', () => {
    const path = 'path';
    const body = 'myParams';
    when(mockHttp.put(anything(), anything())).thenReturn(of());
    when(spyService.handleDefaultOptions(anything())).thenReturn(source => source);

    const obs = service.put(path, body);

    expect(obs instanceof Observable).toBeTruthy();

    verify(spyService.handleDefaultOptions(anything())).times(1);
    verify(mockHttp.put(`${Environment.apiUrl}${path}`, body)).times(1);
  });

  it('patch should call HttpClient', () => {
    const path = 'path';
    const body = 'myParams';
    when(mockHttp.patch(anything(), anything())).thenReturn(of());
    when(spyService.handleDefaultOptions(anything())).thenReturn(source => source);

    const obs = service.patch(path, body);

    expect(obs instanceof Observable).toBeTruthy();

    verify(spyService.handleDefaultOptions(anything())).times(1);
    verify(mockHttp.patch(`${Environment.apiUrl}${path}`, body)).times(1);
  });

  it('patch should call HttpClient', () => {
    const path = 'path';
    const body = 'myParams';
    when(mockHttp.patch(anything(), anything())).thenReturn(of());
    when(spyService.handleDefaultOptions(anything())).thenReturn(source => source);

    const obs = service.patch(path, body, { showLoading: true, defaultErrorHandling: true });

    expect(obs instanceof Observable).toBeTruthy();

    verify(spyService.handleDefaultOptions(anything())).times(1);
    verify(mockHttp.patch(`${Environment.apiUrl}${path}`, body)).times(1);
  });

  it('delete should call HttpClient', () => {
    const path = 'path';
    when(mockHttp.delete(anything())).thenReturn(of());
    when(spyService.handleDefaultOptions(anything())).thenReturn(source => source);

    const obs = service.delete(path);

    expect(obs instanceof Observable).toBeTruthy();

    verify(spyService.handleDefaultOptions(anything())).times(1);
    verify(mockHttp.delete(`${Environment.apiUrl}${path}`)).times(1);
  });

  it('handleDefaultOptions with default error option should take care of error with status 404', () => {
    const errorMessage = 'Registro não encontrado.';
    const error = { status: 404 };

    const defaultOptions: ApiOptions = { showLoading: false, defaultErrorHandling: true };

    const obs = throwError(error)
      .pipe(service.handleDefaultOptions(defaultOptions))
      .subscribe(
        () => {},
        err => {
          expect(err).toEqual(error);
        }
      );

    verify(mockSnackbar.showError(errorMessage)).times(1);
  });

  it('handleDefaultOptions with default error option should take care of unknown error', () => {
    const error = null;

    const defaultOptions: ApiOptions = { showLoading: false, defaultErrorHandling: true };

    const obs = throwError(error)
      .pipe(service.handleDefaultOptions(defaultOptions))
      .subscribe(
        () => {},
        err => {
          expect(err).toEqual(error);
        }
      );

    verify(mockSnackbar.showError('Ocorreu um erro inesperado.')).times(1);
  });

  it('handleDefaultOptions without default error option should not show error', () => {
    const error = null;

    const defaultOptions: ApiOptions = { showLoading: false, defaultErrorHandling: false };

    const obs = throwError(error)
      .pipe(service.handleDefaultOptions(defaultOptions))
      .subscribe(
        () => {},
        err => {
          expect(err).toEqual(error);
        }
      );

    verify(mockSnackbar.showError('Ocorreu um erro inesperado.')).times(0);
  });

  it('handleDefaultOptions with error without message should show default error', () => {
    const error = { status: 999 };

    const defaultOptions: ApiOptions = { showLoading: false, defaultErrorHandling: true };
    throwError(error)
      .pipe(service.handleDefaultOptions(defaultOptions))
      .subscribe(
        () => {},
        err => {
          expect(err).toEqual(error);
        }
      );
    verify(mockSnackbar.showError('Ocorreu um erro inesperado.')).times(1);
  });

  it('handleDefaultOptions should show and hide loading', fakeAsync(() => {
    const value = 'value';
    const options: ApiOptions = { showLoading: true };

    of(value)
      .pipe(service.handleDefaultOptions(options))
      .subscribe(data => {
        expect(data).toBe(value);
      });

    tick();

    verify(mockLoading.show()).called();
    verify(mockLoading.hide()).called();
  }));
});
