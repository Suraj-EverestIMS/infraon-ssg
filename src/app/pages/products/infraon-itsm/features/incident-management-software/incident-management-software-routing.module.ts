import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentManagementSoftwareComponent } from './incident-management-software.component';

const routes: Routes = [{ path: '', component: IncidentManagementSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentManagementSoftwareRoutingModule { }
