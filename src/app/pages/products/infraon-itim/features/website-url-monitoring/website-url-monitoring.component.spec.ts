import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteUrlMonitoringComponent } from './website-url-monitoring.component';

describe('WebsiteUrlMonitoringComponent', () => {
  let component: WebsiteUrlMonitoringComponent;
  let fixture: ComponentFixture<WebsiteUrlMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteUrlMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteUrlMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
