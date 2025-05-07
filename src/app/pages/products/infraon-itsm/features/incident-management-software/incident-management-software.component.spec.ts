import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentManagementSoftwareComponent } from './incident-management-software.component';

describe('IncidentManagementSoftwareComponent', () => {
  let component: IncidentManagementSoftwareComponent;
  let fixture: ComponentFixture<IncidentManagementSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentManagementSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentManagementSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
