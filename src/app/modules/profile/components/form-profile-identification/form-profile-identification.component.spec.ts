import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileIdentificationComponent } from './form-profile-identification.component';

describe('FormProfileIdentificationComponent', () => {
  let component: FormProfileIdentificationComponent;
  let fixture: ComponentFixture<FormProfileIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileIdentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
