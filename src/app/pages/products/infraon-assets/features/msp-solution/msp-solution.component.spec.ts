import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspSolutionComponent } from './msp-solution.component';

describe('MspSolutionComponent', () => {
  let component: MspSolutionComponent;
  let fixture: ComponentFixture<MspSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MspSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
