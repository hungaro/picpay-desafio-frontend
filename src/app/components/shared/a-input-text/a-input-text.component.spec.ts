import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AInputTextComponent } from './a-input-text.component';

describe('AInputTextComponent', () => {
  let component: AInputTextComponent;
  let fixture: ComponentFixture<AInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
