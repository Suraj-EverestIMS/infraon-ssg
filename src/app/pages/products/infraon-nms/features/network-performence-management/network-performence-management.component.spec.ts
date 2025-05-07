import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkPerformenceManagementComponent } from './network-performence-management.component';

describe('NetworkPerformenceManagementComponent', () => {
  let component: NetworkPerformenceManagementComponent;
  let fixture: ComponentFixture<NetworkPerformenceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkPerformenceManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkPerformenceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
