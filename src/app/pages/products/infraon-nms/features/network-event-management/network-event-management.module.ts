import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkEventManagementRoutingModule } from './network-event-management-routing.module';
import { NetworkEventManagementComponent } from './network-event-management.component';


@NgModule({
  declarations: [
    NetworkEventManagementComponent
  ],
  imports: [
    CommonModule,
    NetworkEventManagementRoutingModule
  ]
})
export class NetworkEventManagementModule { }
