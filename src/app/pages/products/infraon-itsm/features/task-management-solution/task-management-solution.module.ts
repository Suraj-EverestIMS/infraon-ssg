import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementSolutionRoutingModule } from './task-management-solution-routing.module';
import { TaskManagementSolutionComponent } from './task-management-solution.component';


@NgModule({
  declarations: [
    TaskManagementSolutionComponent
  ],
  imports: [
    CommonModule,
    TaskManagementSolutionRoutingModule
  ]
})
export class TaskManagementSolutionModule { }
