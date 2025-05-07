import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSlaManagementComponent } from './network-sla-management.component';

describe('NetworkSlaManagementComponent', () => {
  let component: NetworkSlaManagementComponent;
  let fixture: ComponentFixture<NetworkSlaManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkSlaManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkSlaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
