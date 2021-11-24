import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { anyOfClass, anything, capture, instance, mock, spy, verify, when } from 'ts-mockito';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let spyService: SnackbarService;
  let mockMatSnackbar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useFactory: () => instance(mockMatSnackbar)
        }
      ]
    });
  });

  beforeEach(() => {
    mockMatSnackbar = mock(MatSnackBar);
    service = TestBed.inject(SnackbarService);
    spyService = spy(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('showSuccess show message', () => {
    const message = 'myMessage';
    service.showSuccess(message);
    verify(spyService.showSnack(message, 'success')).times(1);
    expect().nothing();
  });

  it('showError show message', () => {
    const message = 'myMessage';
    service.showError(message);
    verify(spyService.showSnack(message, 'error')).times(1);
    expect().nothing();
  });

  it('showInfo show message', () => {
    const message = 'myMessage';
    service.showInfo(message);
    verify(spyService.showSnack(message, 'info')).times(1);
    expect().nothing();
  });

  it('showError show message default', () => {
    service.showError();
    verify(spyService.showSnack('Erro inesperado', 'error')).times(1);
    expect().nothing();
  });

  it('showSnack should show snack with default options and class', () => {
    const message = 'message';
    when(mockMatSnackbar.openFromComponent(anything(), anything())).thenCall((component, data) => {
      expect(data.panelClass).toEqual(['app-snackbar', 'error']);
      expect(data.data).toEqual({
        html: message,
        action: 'error'
      });
    });
    service.showSnack(message, 'error');
    verify(mockMatSnackbar.openFromComponent(SnackbarComponent, anyOfClass(MatSnackBarConfig))).once();
  });
});
