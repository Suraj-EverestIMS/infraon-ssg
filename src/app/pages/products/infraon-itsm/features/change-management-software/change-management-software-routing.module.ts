import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeManagementSoftwareComponent } from './change-management-software.component';

const routes: Routes = [{ path: '', component: ChangeManagementSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeManagementSoftwareRoutingModule { }
