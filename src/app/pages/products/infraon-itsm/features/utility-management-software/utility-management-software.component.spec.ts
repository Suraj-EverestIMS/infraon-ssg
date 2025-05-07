import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityManagementSoftwareComponent } from './utility-management-software.component';

describe('UtilityManagementSoftwareComponent', () => {
  let component: UtilityManagementSoftwareComponent;
  let fixture: ComponentFixture<UtilityManagementSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityManagementSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityManagementSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
