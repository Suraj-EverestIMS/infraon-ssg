import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementSolutionComponent } from './project-management-solution.component';

describe('ProjectManagementSolutionComponent', () => {
  let component: ProjectManagementSolutionComponent;
  let fixture: ComponentFixture<ProjectManagementSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagementSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
