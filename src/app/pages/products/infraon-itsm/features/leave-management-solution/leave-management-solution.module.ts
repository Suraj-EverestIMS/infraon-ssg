import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementSolutionRoutingModule } from './leave-management-solution-routing.module';
import { LeaveManagementSolutionComponent } from './leave-management-solution.component';


@NgModule({
  declarations: [
    LeaveManagementSolutionComponent
  ],
  imports: [
    CommonModule,
    LeaveManagementSolutionRoutingModule
  ]
})
export class LeaveManagementSolutionModule { }
