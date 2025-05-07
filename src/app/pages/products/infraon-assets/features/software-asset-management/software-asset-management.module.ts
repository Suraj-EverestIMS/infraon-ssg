import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareAssetManagementRoutingModule } from './software-asset-management-routing.module';
import { SoftwareAssetManagementComponent } from './software-asset-management.component';


@NgModule({
  declarations: [
    SoftwareAssetManagementComponent
  ],
  imports: [
    CommonModule,
    SoftwareAssetManagementRoutingModule
  ]
})
export class SoftwareAssetManagementModule { }
