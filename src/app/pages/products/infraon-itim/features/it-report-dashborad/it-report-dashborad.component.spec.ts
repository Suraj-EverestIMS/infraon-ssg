import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItReportDashboradComponent } from './it-report-dashborad.component';

describe('ItReportDashboradComponent', () => {
  let component: ItReportDashboradComponent;
  let fixture: ComponentFixture<ItReportDashboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItReportDashboradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItReportDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
