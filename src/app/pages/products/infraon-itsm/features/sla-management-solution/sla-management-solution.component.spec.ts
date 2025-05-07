import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaManagementSolutionComponent } from './sla-management-solution.component';

describe('SlaManagementSolutionComponent', () => {
  let component: SlaManagementSolutionComponent;
  let fixture: ComponentFixture<SlaManagementSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaManagementSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlaManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
