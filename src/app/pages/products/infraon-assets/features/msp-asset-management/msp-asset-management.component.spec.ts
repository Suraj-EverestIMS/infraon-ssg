import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspAssetManagementComponent } from './msp-asset-management.component';

describe('MspAssetManagementComponent', () => {
  let component: MspAssetManagementComponent;
  let fixture: ComponentFixture<MspAssetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspAssetManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MspAssetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
