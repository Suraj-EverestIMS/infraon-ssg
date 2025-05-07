import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAllocationSolutionComponent } from './auto-allocation-solution.component';

describe('AutoAllocationSolutionComponent', () => {
  let component: AutoAllocationSolutionComponent;
  let fixture: ComponentFixture<AutoAllocationSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoAllocationSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoAllocationSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
