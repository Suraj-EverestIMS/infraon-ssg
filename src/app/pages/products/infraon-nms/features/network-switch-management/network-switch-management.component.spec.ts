import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSwitchManagementComponent } from './network-switch-management.component';

describe('NetworkSwitchManagementComponent', () => {
  let component: NetworkSwitchManagementComponent;
  let fixture: ComponentFixture<NetworkSwitchManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkSwitchManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkSwitchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
