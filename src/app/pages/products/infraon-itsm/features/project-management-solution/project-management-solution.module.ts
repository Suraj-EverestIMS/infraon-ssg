import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementSolutionRoutingModule } from './project-management-solution-routing.module';
import { ProjectManagementSolutionComponent } from './project-management-solution.component';


@NgModule({
  declarations: [
    ProjectManagementSolutionComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementSolutionRoutingModule
  ]
})
export class ProjectManagementSolutionModule { }
