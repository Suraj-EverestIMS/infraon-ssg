import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseManagementSolutionComponent } from './release-management-solution.component';

describe('ReleaseManagementSolutionComponent', () => {
  let component: ReleaseManagementSolutionComponent;
  let fixture: ComponentFixture<ReleaseManagementSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseManagementSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
