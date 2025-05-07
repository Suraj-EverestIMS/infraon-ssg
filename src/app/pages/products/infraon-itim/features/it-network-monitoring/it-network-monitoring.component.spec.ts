import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItNetworkMonitoringComponent } from './it-network-monitoring.component';

describe('ItNetworkMonitoringComponent', () => {
  let component: ItNetworkMonitoringComponent;
  let fixture: ComponentFixture<ItNetworkMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItNetworkMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItNetworkMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
