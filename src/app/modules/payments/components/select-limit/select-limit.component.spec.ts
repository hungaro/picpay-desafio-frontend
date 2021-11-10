import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLimitComponent } from './select-limit.component';

describe('SelectLimitComponent', () => {
  let component: SelectLimitComponent;
  let fixture: ComponentFixture<SelectLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
