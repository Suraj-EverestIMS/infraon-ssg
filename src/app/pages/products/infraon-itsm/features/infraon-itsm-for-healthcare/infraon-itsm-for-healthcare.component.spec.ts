import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonITSMForHealthcareComponent } from './infraon-itsm-for-healthcare.component';

describe('InfraonITSMForHealthcareComponent', () => {
  let component: InfraonITSMForHealthcareComponent;
  let fixture: ComponentFixture<InfraonITSMForHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonITSMForHealthcareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonITSMForHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
