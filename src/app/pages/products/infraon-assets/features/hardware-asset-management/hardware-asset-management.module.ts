import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HardwareAssetManagementRoutingModule } from './hardware-asset-management-routing.module';
import { HardwareAssetManagementComponent } from './hardware-asset-management.component';


@NgModule({
  declarations: [
    HardwareAssetManagementComponent
  ],
  imports: [
    CommonModule,
    HardwareAssetManagementRoutingModule
  ]
})
export class HardwareAssetManagementModule { }
