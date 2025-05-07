import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAssetManagementForBfsiComponent } from './it-asset-management-for-bfsi.component';

describe('ItAssetManagementForBfsiComponent', () => {
  let component: ItAssetManagementForBfsiComponent;
  let fixture: ComponentFixture<ItAssetManagementForBfsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAssetManagementForBfsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItAssetManagementForBfsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
