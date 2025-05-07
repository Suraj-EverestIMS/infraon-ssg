import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaManagementComponent } from './sla-management.component';

describe('SlaManagementComponent', () => {
  let component: SlaManagementComponent;
  let fixture: ComponentFixture<SlaManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
