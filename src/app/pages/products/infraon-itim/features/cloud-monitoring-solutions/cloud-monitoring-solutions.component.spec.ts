import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMonitoringSolutionsComponent } from './cloud-monitoring-solutions.component';

describe('CloudMonitoringSolutionsComponent', () => {
  let component: CloudMonitoringSolutionsComponent;
  let fixture: ComponentFixture<CloudMonitoringSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudMonitoringSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudMonitoringSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
