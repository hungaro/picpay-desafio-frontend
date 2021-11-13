import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLoginFormComponent } from './t-login-form.component';

describe('TLoginFormComponent', () => {
  let component: TLoginFormComponent;
  let fixture: ComponentFixture<TLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
