import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementSolutionComponent } from './task-management-solution.component';

describe('TaskManagementSolutionComponent', () => {
  let component: TaskManagementSolutionComponent;
  let fixture: ComponentFixture<TaskManagementSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagementSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
