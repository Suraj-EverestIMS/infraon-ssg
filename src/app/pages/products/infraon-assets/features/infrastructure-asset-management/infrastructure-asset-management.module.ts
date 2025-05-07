import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfrastructureAssetManagementRoutingModule } from './infrastructure-asset-management-routing.module';
import { InfrastructureAssetManagementComponent } from './infrastructure-asset-management.component';


@NgModule({
  declarations: [
    InfrastructureAssetManagementComponent
  ],
  imports: [
    CommonModule,
    InfrastructureAssetManagementRoutingModule
  ]
})
export class InfrastructureAssetManagementModule { }
