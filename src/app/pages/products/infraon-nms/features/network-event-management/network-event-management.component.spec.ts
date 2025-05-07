import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkEventManagementComponent } from './network-event-management.component';

describe('NetworkEventManagementComponent', () => {
  let component: NetworkEventManagementComponent;
  let fixture: ComponentFixture<NetworkEventManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkEventManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkEventManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
