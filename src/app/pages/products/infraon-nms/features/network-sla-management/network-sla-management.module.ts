import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkSlaManagementRoutingModule } from './network-sla-management-routing.module';
import { NetworkSlaManagementComponent } from './network-sla-management.component';


@NgModule({
  declarations: [
    NetworkSlaManagementComponent
  ],
  imports: [
    CommonModule,
    NetworkSlaManagementRoutingModule
  ]
})
export class NetworkSlaManagementModule { }
