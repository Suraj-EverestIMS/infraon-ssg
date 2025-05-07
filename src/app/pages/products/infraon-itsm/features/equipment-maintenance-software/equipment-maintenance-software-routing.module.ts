import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentMaintenanceSoftwareComponent } from './equipment-maintenance-software.component';

const routes: Routes = [{ path: '', component: EquipmentMaintenanceSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentMaintenanceSoftwareRoutingModule { }
