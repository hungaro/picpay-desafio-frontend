import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { anything, instance, mock, when } from 'ts-mockito';
import { UserAccount } from '../models/user-account.model';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
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
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('authenticated should call user endpoint', () => {
    let userAccount: UserAccount = {
      id: 0,
      email: 'email@email.com',
      name: 'Teste',
      password: '123'
    };
    when(mockApiService.get(anything(), anything(), anything())).thenReturn(of([userAccount]));
    service.authenticate({ email: 'email@email.com', password: '123' }).subscribe(data => {
      expect(data).toEqual(userAccount);
      service.getUserData().subscribe(userData => expect(userData).toEqual(userAccount));
      service.isAuthenticated().subscribe(data => expect(data).toBeTruthy());
    });
  });

  it('authenticated should call user endpoint and return error if not found', () => {
    when(mockApiService.get(anything(), anything(), anything())).thenReturn(of(null));
    service.authenticate({ email: 'email@email.com', password: '123' }).subscribe(
      () => {
        fail();
      },
      err => expect(err).toEqual(new HttpErrorResponse({ status: 404, error: 'Email ou senha incorretos' }))
    );
  });
});
