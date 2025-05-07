import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseServiceManagementComponent } from './enterprise-service-management.component';

describe('EnterpriseServiceManagementComponent', () => {
  let component: EnterpriseServiceManagementComponent;
  let fixture: ComponentFixture<EnterpriseServiceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseServiceManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseServiceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
