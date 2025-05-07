import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonITSMForItServiceSolutionComponent } from './infraon-itsm-for-it-service-solution.component';

describe('InfraonITSMForItServiceSolutionComponent', () => {
  let component: InfraonITSMForItServiceSolutionComponent;
  let fixture: ComponentFixture<InfraonITSMForItServiceSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonITSMForItServiceSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonITSMForItServiceSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
