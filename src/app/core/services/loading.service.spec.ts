/* tslint:disable:no-unused-variable */

import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { of, Subscription } from 'rxjs';
import { anything, capture, instance, mock, spy, verify, when } from 'ts-mockito';
import { LoadingComponent } from '../components';
import { LoadingService } from './loading.service';

describe('Service: Loading', () => {
  let service: LoadingService;
  let spyService: LoadingService;
  let mockOverlay: Overlay;
  const overlayRef = {
    hasAttached: () => false,
    detach: () => {},
    attach: (component: any) => {
      expect(component).toEqual(new ComponentPortal(LoadingComponent));
    }
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: Overlay,
            useFactory: () => instance(mockOverlay)
          }
        ]
      });
    })
  );

  beforeEach(() => {
    mockOverlay = mock(Overlay);
    when(mockOverlay.create(anything())).thenReturn(overlayRef as any);
    const centerPosition = 'handleCenter';
    const overlayOptions = {
      global: () => ({
        centerHorizontally: () => ({
          centerVertically: () => centerPosition
        })
      })
    };
    when(mockOverlay.position()).thenReturn(overlayOptions as any);
    when(mockOverlay.create(anything())).thenReturn(overlayRef as any);
    service = TestBed.inject(LoadingService);
    verify(mockOverlay.create(anything())).times(1);
    expect(capture(mockOverlay.create).last()).toEqual([
      {
        hasBackdrop: true,
        backdropClass: 'loading-backdrop',
        positionStrategy: centerPosition
      }
    ]);
    spyService = spy(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('show should create a overlay', () => {
    (service as any).hideSubscription.unsubscribe();
    spyOn(overlayRef, 'hasAttached').and.callThrough();
    spyOn(overlayRef, 'attach').and.callThrough();
    when((spyService as any).getEventObservable()).thenReturn(of(true));
    service.show();
    expect(overlayRef.hasAttached).toHaveBeenCalledTimes(1);
    expect(overlayRef.attach).toHaveBeenCalledTimes(1);
  });

  it('show if already showed should not attach again', () => {
    (service as any).hideSubscription.unsubscribe();
    spyOn(overlayRef, 'hasAttached').and.callFake(() => true);
    spyOn(overlayRef, 'attach').and.callThrough();
    when((spyService as any).getEventObservable()).thenReturn(of(true));
    service.show();
    expect(overlayRef.hasAttached).toHaveBeenCalledTimes(1);
    expect(overlayRef.attach).toHaveBeenCalledTimes(0);
  });

  it('hide should detach the overlay', () => {
    (service as any).showSubscription.unsubscribe();
    spyOn(overlayRef, 'detach').and.callThrough();
    when((spyService as any).getEventObservable()).thenReturn(of(true));
    service.hide();
    expect(overlayRef.detach).toHaveBeenCalledTimes(1);
  });

  it('show should stop the hide event', () => {
    const subscriptionObject = new Subscription();
    (service as any).hideSubscription = subscriptionObject;
    spyOn(subscriptionObject, 'unsubscribe').and.callThrough();
    service.show();
    expect(subscriptionObject.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('hide should stop the show event', () => {
    const subscriptionObject = new Subscription();
    (service as any).showSubscription = subscriptionObject;
    spyOn(subscriptionObject, 'unsubscribe').and.callThrough();
    service.hide();
    expect(subscriptionObject.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('getEventObservable should wait 100 ms', fakeAsync(() => {
    let controlVar = false;
    (service as any).getEventObservable().subscribe(() => (controlVar = true));
    expect(controlVar).toBeFalse();
    tick(100);
    expect(controlVar).toBeTrue();
  }));
});
