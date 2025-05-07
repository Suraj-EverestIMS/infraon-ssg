import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagementSolutionComponent } from './project-management-solution.component';

const routes: Routes = [{ path: '', component: ProjectManagementSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementSolutionRoutingModule { }
