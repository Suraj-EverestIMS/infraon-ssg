import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeNetworkMonitoringComponent } from './real-time-network-monitoring.component';

describe('RealTimeNetworkMonitoringComponent', () => {
  let component: RealTimeNetworkMonitoringComponent;
  let fixture: ComponentFixture<RealTimeNetworkMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeNetworkMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeNetworkMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
