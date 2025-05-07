import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkFaultManagementRoutingModule } from './network-fault-management-routing.module';
import { NetworkFaultManagementComponent } from './network-fault-management.component';


@NgModule({
  declarations: [
    NetworkFaultManagementComponent
  ],
  imports: [
    CommonModule,
    NetworkFaultManagementRoutingModule
  ]
})
export class NetworkFaultManagementModule { }
