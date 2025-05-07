import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseManagementSolutionRoutingModule } from './release-management-solution-routing.module';
import { ReleaseManagementSolutionComponent } from './release-management-solution.component';


@NgModule({
  declarations: [
    ReleaseManagementSolutionComponent
  ],
  imports: [
    CommonModule,
    ReleaseManagementSolutionRoutingModule
  ]
})
export class ReleaseManagementSolutionModule { }
