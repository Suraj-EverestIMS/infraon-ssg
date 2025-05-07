import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsMonitoringSolutionsComponent } from './aws-monitoring-solutions.component';

describe('AwsMonitoringSolutionsComponent', () => {
  let component: AwsMonitoringSolutionsComponent;
  let fixture: ComponentFixture<AwsMonitoringSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsMonitoringSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsMonitoringSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
