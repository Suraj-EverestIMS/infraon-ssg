import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentMaintenanceSoftwareRoutingModule } from './equipment-maintenance-software-routing.module';
import { EquipmentMaintenanceSoftwareComponent } from './equipment-maintenance-software.component';


@NgModule({
  declarations: [
    EquipmentMaintenanceSoftwareComponent
  ],
  imports: [
    CommonModule,
    EquipmentMaintenanceSoftwareRoutingModule
  ]
})
export class EquipmentMaintenanceSoftwareModule { }
