import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingSolutionComponent } from './manufacturing-solution.component';

describe('ManufacturingSolutionComponent', () => {
  let component: ManufacturingSolutionComponent;
  let fixture: ComponentFixture<ManufacturingSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturingSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturingSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
