import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/shared/services/api.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ 
        HttpClientTestingModule, 
        RouterTestingModule,
        ReactiveFormsModule
      ], 
      providers: [ApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test elements exist
  it('should render form with email and password inputs', () => {
    const element = fixture.nativeElement;   
    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('input[name="email"]')).toBeTruthy();
    expect(element.querySelector('input[name="password"]')).toBeTruthy();
    expect(element.querySelector('button')).toBeTruthy();    
  });
  
  // Verify form values
  it('should return invalid when form is empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  // Test email
  it('should validate email input as required', () => {
    const email = component.loginForm.controls.email;
  
    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeTruthy();
  });

  it('should validate email format', () => {
    const email = component.loginForm.controls.email;
    email.setValue('test');
    const errors = email.errors;
  
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeTruthy();
    expect(email.valid).toBeFalsy();
  });

  it('should validate email format correctly', () => {
    const email = component.loginForm.controls.email;
    email.setValue('test@test.com');
    const errors = email.errors || {};
  
    expect(email.valid).toBeTruthy();
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeFalsy();
  });

  // Test password
  it('should validate password input as required', () => {
    const password = component.loginForm.controls.password;
    expect(password.valid).toBeFalsy();
    expect(password.errors.required).toBeTruthy();
  });
});;
