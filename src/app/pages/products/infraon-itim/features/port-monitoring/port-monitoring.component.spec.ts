import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortMonitoringComponent } from './port-monitoring.component';

describe('PortMonitoringComponent', () => {
  let component: PortMonitoringComponent;
  let fixture: ComponentFixture<PortMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
