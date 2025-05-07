import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareMonitoringToolComponent } from './vmware-monitoring-tool.component';

describe('VmwareMonitoringToolComponent', () => {
  let component: VmwareMonitoringToolComponent;
  let fixture: ComponentFixture<VmwareMonitoringToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmwareMonitoringToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmwareMonitoringToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
