import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared.module';

import { AccountService } from '@services/account.service';
import { AuthenticationService } from '@services/authentication.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [CommonModule, HttpClientTestingModule, RouterModule.forRoot([]), SharedModule],
      providers: [AccountService, AuthenticationService, { provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });

  it('should create profile component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
