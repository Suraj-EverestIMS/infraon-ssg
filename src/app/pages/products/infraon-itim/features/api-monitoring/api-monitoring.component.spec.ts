import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMonitoringComponent } from './api-monitoring.component';

describe('ApiMonitoringComponent', () => {
  let component: ApiMonitoringComponent;
  let fixture: ComponentFixture<ApiMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
