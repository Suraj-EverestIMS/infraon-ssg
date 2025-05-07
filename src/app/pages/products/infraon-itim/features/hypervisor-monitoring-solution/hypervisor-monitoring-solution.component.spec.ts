import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypervisorMonitoringSolutionComponent } from './hypervisor-monitoring-solution.component';

describe('HypervisorMonitoringSolutionComponent', () => {
  let component: HypervisorMonitoringSolutionComponent;
  let fixture: ComponentFixture<HypervisorMonitoringSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypervisorMonitoringSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypervisorMonitoringSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
