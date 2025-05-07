import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridCloudMonitoringComponent } from './hybrid-cloud-monitoring.component';

describe('HybridCloudMonitoringComponent', () => {
  let component: HybridCloudMonitoringComponent;
  let fixture: ComponentFixture<HybridCloudMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridCloudMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HybridCloudMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
