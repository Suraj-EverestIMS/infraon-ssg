import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAssetManagementComponent } from './it-asset-management.component';

describe('ItAssetManagementComponent', () => {
  let component: ItAssetManagementComponent;
  let fixture: ComponentFixture<ItAssetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAssetManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItAssetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
