import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInventoryManagementComponent } from './network-inventory-management.component';

describe('NetworkInventoryManagementComponent', () => {
  let component: NetworkInventoryManagementComponent;
  let fixture: ComponentFixture<NetworkInventoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkInventoryManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkInventoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
