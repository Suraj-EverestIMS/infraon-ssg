import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmsReportsDashboardComponent } from './nms-reports-dashboard.component';

describe('NmsReportsDashboardComponent', () => {
  let component: NmsReportsDashboardComponent;
  let fixture: ComponentFixture<NmsReportsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmsReportsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NmsReportsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
