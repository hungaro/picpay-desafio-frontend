import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AInputPasswordComponent } from './a-input-password.component';

describe('AInputPasswordComponent', () => {
  let component: AInputPasswordComponent;
  let fixture: ComponentFixture<AInputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AInputPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
