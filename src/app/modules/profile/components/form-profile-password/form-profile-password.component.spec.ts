import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfilePasswordComponent } from './form-profile-password.component';

describe('FormProfilePasswordComponent', () => {
  let component: FormProfilePasswordComponent;
  let fixture: ComponentFixture<FormProfilePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfilePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfilePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
