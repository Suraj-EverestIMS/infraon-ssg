import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonITSMForEducationInstitutionsComponent } from './infraon-itsm-for-education-institutions.component';

describe('InfraonITSMForEducationInstitutionsComponent', () => {
  let component: InfraonITSMForEducationInstitutionsComponent;
  let fixture: ComponentFixture<InfraonITSMForEducationInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonITSMForEducationInstitutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonITSMForEducationInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
