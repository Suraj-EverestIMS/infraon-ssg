import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlaManagementSolutionRoutingModule } from './sla-management-solution-routing.module';
import { SlaManagementSolutionComponent } from './sla-management-solution.component';


@NgModule({
  declarations: [
    SlaManagementSolutionComponent
  ],
  imports: [
    CommonModule,
    SlaManagementSolutionRoutingModule
  ]
})
export class SlaManagementSolutionModule { }
