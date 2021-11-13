import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLoginImgComponent } from './t-login-img.component';

describe('TLoginImgComponent', () => {
  let component: TLoginImgComponent;
  let fixture: ComponentFixture<TLoginImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TLoginImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TLoginImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
