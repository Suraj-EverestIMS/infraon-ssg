import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAssetManagementComponent } from './fixed-asset-management.component';

describe('FixedAssetManagementComponent', () => {
  let component: FixedAssetManagementComponent;
  let fixture: ComponentFixture<FixedAssetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedAssetManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedAssetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
