import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartsManagementComponent } from './spare-parts-management.component';

describe('SparePartsManagementComponent', () => {
  let component: SparePartsManagementComponent;
  let fixture: ComponentFixture<SparePartsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparePartsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparePartsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
