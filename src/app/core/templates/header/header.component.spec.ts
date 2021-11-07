import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent } from 'ng-mocks';

import { SharedModule } from '@shared/shared.module';

import { AccountService } from '@services/account.service';
import { AuthenticationService } from '@services/authentication.service';

import { ProfileComponent } from '../profile/profile.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockComponent(ProfileComponent), HeaderComponent],
      imports: [CommonModule, HttpClientTestingModule, RouterModule.forRoot([]), SharedModule],
      providers: [AccountService, AuthenticationService, { provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should be created header component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo image', () => {
    const compiled = fixture.debugElement.nativeElement;
    const img = compiled.querySelector('img');

    expect(img).toBeTruthy();
    expect(img.alt).toBe('Logo image');
  });

  it('should have ProfileComponent', () => {
    const compiled = fixture.debugElement.nativeElement;
    const profileComponent = compiled.querySelector('app-profile');

    expect(profileComponent).toBeTruthy();
  });

  it('should have logout icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const logoutIcon = compiled.querySelector('mat-icon');

    expect(logoutIcon).toBeTruthy();
    expect(logoutIcon.textContent).toContain('logout');
  });

  it('should logout user', () => {
    const logout = jest.spyOn(component, 'logout').mockReturnValue(null);
    const routerNavigate = jest.spyOn(router, 'navigate').mockReturnValue(null);

    const compiled = fixture.debugElement.nativeElement;
    const logoutIcon = compiled.querySelector('mat-icon');

    logoutIcon.click();

    expect(logout).toHaveBeenCalled();
    expect(routerNavigate).toBeTruthy();
  });
});
