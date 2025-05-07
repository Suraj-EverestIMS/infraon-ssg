import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilityManagementSoftwareComponent } from './utility-management-software.component';

const routes: Routes = [{ path: '', component: UtilityManagementSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityManagementSoftwareRoutingModule { }
