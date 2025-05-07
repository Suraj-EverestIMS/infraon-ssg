import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlaManagementRoutingModule } from './sla-management-routing.module';
import { SlaManagementComponent } from './sla-management.component';


@NgModule({
  declarations: [
    SlaManagementComponent
  ],
  imports: [
    CommonModule,
    SlaManagementRoutingModule
  ]
})
export class SlaManagementModule { }
