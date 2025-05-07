import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareAssetManagementComponent } from './software-asset-management.component';

describe('SoftwareAssetManagementComponent', () => {
  let component: SoftwareAssetManagementComponent;
  let fixture: ComponentFixture<SoftwareAssetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareAssetManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareAssetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
