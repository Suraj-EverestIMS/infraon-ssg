import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRequestManagementRoutingModule } from './service-request-management-routing.module';
import { ServiceRequestManagementComponent } from './service-request-management.component';


@NgModule({
  declarations: [
    ServiceRequestManagementComponent
  ],
  imports: [
    CommonModule,
    ServiceRequestManagementRoutingModule
  ]
})
export class ServiceRequestManagementModule { }
