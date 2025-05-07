import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityManagementSoftwareRoutingModule } from './utility-management-software-routing.module';
import { UtilityManagementSoftwareComponent } from './utility-management-software.component';


@NgModule({
  declarations: [
    UtilityManagementSoftwareComponent
  ],
  imports: [
    CommonModule,
    UtilityManagementSoftwareRoutingModule
  ]
})
export class UtilityManagementSoftwareModule { }
