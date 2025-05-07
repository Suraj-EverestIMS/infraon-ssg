import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentMaintenanceSoftwareComponent } from './equipment-maintenance-software.component';

describe('EquipmentMaintenanceSoftwareComponent', () => {
  let component: EquipmentMaintenanceSoftwareComponent;
  let fixture: ComponentFixture<EquipmentMaintenanceSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentMaintenanceSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentMaintenanceSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
