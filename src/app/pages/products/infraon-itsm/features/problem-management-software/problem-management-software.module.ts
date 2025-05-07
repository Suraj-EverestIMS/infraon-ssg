import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemManagementSoftwareRoutingModule } from './problem-management-software-routing.module';
import { ProblemManagementSoftwareComponent } from './problem-management-software.component';


@NgModule({
  declarations: [
    ProblemManagementSoftwareComponent
  ],
  imports: [
    CommonModule,
    ProblemManagementSoftwareRoutingModule
  ]
})
export class ProblemManagementSoftwareModule { }
