import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsForHealthcareComponent } from './assets-for-healthcare.component';

describe('AssetsForHealthcareComponent', () => {
  let component: AssetsForHealthcareComponent;
  let fixture: ComponentFixture<AssetsForHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsForHealthcareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsForHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
