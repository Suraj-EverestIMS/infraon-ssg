import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowAutomationComponent } from './workflow-automation.component';

describe('WorkflowAutomationComponent', () => {
  let component: WorkflowAutomationComponent;
  let fixture: ComponentFixture<WorkflowAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
