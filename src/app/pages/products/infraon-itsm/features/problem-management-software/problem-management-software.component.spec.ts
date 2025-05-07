import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemManagementSoftwareComponent } from './problem-management-software.component';

describe('ProblemManagementSoftwareComponent', () => {
  let component: ProblemManagementSoftwareComponent;
  let fixture: ComponentFixture<ProblemManagementSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemManagementSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemManagementSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
