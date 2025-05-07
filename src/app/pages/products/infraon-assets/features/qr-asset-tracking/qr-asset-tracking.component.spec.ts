import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrAssetTrackingComponent } from './qr-asset-tracking.component';

describe('QrAssetTrackingComponent', () => {
  let component: QrAssetTrackingComponent;
  let fixture: ComponentFixture<QrAssetTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrAssetTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrAssetTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
