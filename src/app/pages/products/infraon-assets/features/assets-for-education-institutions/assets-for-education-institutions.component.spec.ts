import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsForEducationInstitutionsComponent } from './assets-for-education-institutions.component';

describe('AssetsForEducationInstitutionsComponent', () => {
  let component: AssetsForEducationInstitutionsComponent;
  let fixture: ComponentFixture<AssetsForEducationInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsForEducationInstitutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsForEducationInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
