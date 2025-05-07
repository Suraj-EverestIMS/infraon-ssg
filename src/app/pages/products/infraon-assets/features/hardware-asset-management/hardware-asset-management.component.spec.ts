import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareAssetManagementComponent } from './hardware-asset-management.component';

describe('HardwareAssetManagementComponent', () => {
  let component: HardwareAssetManagementComponent;
  let fixture: ComponentFixture<HardwareAssetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareAssetManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareAssetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
