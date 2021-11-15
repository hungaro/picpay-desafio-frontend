import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHeaderLabelComponent } from './a-header-label.component';

describe('AHeaderLabelComponent', () => {
  let component: AHeaderLabelComponent;
  let fixture: ComponentFixture<AHeaderLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AHeaderLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AHeaderLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
