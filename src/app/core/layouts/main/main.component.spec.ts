import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
  });

  it('should be create main component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have tag main', () => {
    const compiled = fixture.debugElement.nativeElement;
    const mainTag = compiled.querySelector('main');

    expect(mainTag).toBeTruthy();
  });

  it('should have a router-outlet', () => {
    const compiled = fixture.debugElement.nativeElement;
    const routerOutletTag = compiled.querySelector('router-outlet');

    expect(routerOutletTag).toBeTruthy();
  });
});
