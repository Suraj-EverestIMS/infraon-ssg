import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProblemManagementSoftwareComponent } from './problem-management-software.component';

const routes: Routes = [{ path: '', component: ProblemManagementSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemManagementSoftwareRoutingModule { }
