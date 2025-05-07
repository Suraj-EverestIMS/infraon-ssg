import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManagementSolutionComponent } from './leave-management-solution.component';

describe('LeaveManagementSolutionComponent', () => {
  let component: LeaveManagementSolutionComponent;
  let fixture: ComponentFixture<LeaveManagementSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManagementSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
