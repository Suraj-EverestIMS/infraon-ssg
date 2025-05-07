import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkSwitchManagementRoutingModule } from './network-switch-management-routing.module';
import { NetworkSwitchManagementComponent } from './network-switch-management.component';


@NgModule({
  declarations: [
    NetworkSwitchManagementComponent
  ],
  imports: [
    CommonModule,
    NetworkSwitchManagementRoutingModule
  ]
})
export class NetworkSwitchManagementModule { }
