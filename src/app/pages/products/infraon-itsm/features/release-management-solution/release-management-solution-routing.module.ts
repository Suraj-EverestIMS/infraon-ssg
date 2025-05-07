import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseManagementSolutionComponent } from './release-management-solution.component';

const routes: Routes = [{ path: '', component: ReleaseManagementSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseManagementSolutionRoutingModule { }
