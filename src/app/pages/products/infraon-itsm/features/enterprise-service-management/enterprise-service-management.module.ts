import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseServiceManagementRoutingModule } from './enterprise-service-management-routing.module';
import { EnterpriseServiceManagementComponent } from './enterprise-service-management.component';


@NgModule({
  declarations: [
    EnterpriseServiceManagementComponent
  ],
  imports: [
    CommonModule,
    EnterpriseServiceManagementRoutingModule
  ]
})
export class EnterpriseServiceManagementModule { }
