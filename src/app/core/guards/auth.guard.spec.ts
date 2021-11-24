import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { anything, capture, instance, mock, verify, when } from 'ts-mockito';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let mockAuthService: AuthService;
  let mockRouter: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useFactory: () => instance(mockAuthService)
        },
        {
          provide: Router,
          useFactory: () => instance(mockRouter)
        }
      ]
    });
  });

  beforeEach(() => {
    mockAuthService = mock(AuthService);
    mockRouter = mock(Router);
  });

  it('should be created', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('canActivate and canLoad should call checkAuthentication', inject([AuthGuard], (guard: AuthGuard) => {
    spyOn(guard, 'checkAuthentication');
    guard.canActivate({} as any, {} as any);
    guard.canLoad({} as any, {} as any);
    expect(guard.checkAuthentication).toHaveBeenCalledTimes(2);
  }));

  it('checkAuthentication should call auth service', inject([AuthGuard], (guard: AuthGuard) => {
    when(mockAuthService.isAuthenticated()).thenReturn(of(true));
    guard.checkAuthentication().subscribe(authenticated => expect(authenticated).toBeTruthy());
    verify(mockAuthService.isAuthenticated()).once();
    verify(mockRouter.navigate(anything())).never();
  }));

  it('checkAuthentication should call auth service and redirect if not authenticated', inject([AuthGuard], (guard: AuthGuard) => {
    when(mockAuthService.isAuthenticated()).thenReturn(of(false));
    guard.checkAuthentication().subscribe(authenticated => expect(authenticated).toBeFalse());
    verify(mockAuthService.isAuthenticated()).once();
    verify(mockRouter.navigate(anything())).once();
    expect(capture(mockRouter.navigate).last()).toEqual([['/login']]);
  }));
});
