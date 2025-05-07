import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkFaultManagementComponent } from './network-fault-management.component';

describe('NetworkFaultManagementComponent', () => {
  let component: NetworkFaultManagementComponent;
  let fixture: ComponentFixture<NetworkFaultManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkFaultManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkFaultManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
