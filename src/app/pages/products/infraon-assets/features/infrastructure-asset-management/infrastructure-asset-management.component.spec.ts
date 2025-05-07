import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureAssetManagementComponent } from './infrastructure-asset-management.component';

describe('InfrastructureAssetManagementComponent', () => {
  let component: InfrastructureAssetManagementComponent;
  let fixture: ComponentFixture<InfrastructureAssetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfrastructureAssetManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfrastructureAssetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
