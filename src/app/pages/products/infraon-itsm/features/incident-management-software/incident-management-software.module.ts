import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentManagementSoftwareRoutingModule } from './incident-management-software-routing.module';
import { IncidentManagementSoftwareComponent } from './incident-management-software.component';


@NgModule({
  declarations: [
    IncidentManagementSoftwareComponent
  ],
  imports: [
    CommonModule,
    IncidentManagementSoftwareRoutingModule
  ]
})
export class IncidentManagementSoftwareModule { }
