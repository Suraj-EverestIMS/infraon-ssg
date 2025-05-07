import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeManagementSoftwareRoutingModule } from './change-management-software-routing.module';
import { ChangeManagementSoftwareComponent } from './change-management-software.component';


@NgModule({
  declarations: [
    ChangeManagementSoftwareComponent
  ],
  imports: [
    CommonModule,
    ChangeManagementSoftwareRoutingModule
  ]
})
export class ChangeManagementSoftwareModule { }
