import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeAssetTrackingComponent } from './barcode-asset-tracking.component';

describe('BarcodeAssetTrackingComponent', () => {
  let component: BarcodeAssetTrackingComponent;
  let fixture: ComponentFixture<BarcodeAssetTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeAssetTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcodeAssetTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
