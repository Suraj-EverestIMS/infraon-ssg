import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeManagementSoftwareComponent } from './change-management-software.component';

describe('ChangeManagementSoftwareComponent', () => {
  let component: ChangeManagementSoftwareComponent;
  let fixture: ComponentFixture<ChangeManagementSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeManagementSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeManagementSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
