import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMonitoringComponent } from './application-monitoring.component';

describe('ApplicationMonitoringComponent', () => {
  let component: ApplicationMonitoringComponent;
  let fixture: ComponentFixture<ApplicationMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
