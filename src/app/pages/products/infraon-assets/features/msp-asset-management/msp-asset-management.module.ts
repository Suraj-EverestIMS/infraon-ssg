import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MspAssetManagementRoutingModule } from './msp-asset-management-routing.module';
import { MspAssetManagementComponent } from './msp-asset-management.component';


@NgModule({
  declarations: [
    MspAssetManagementComponent
  ],
  imports: [
    CommonModule,
    MspAssetManagementRoutingModule
  ]
})
export class MspAssetManagementModule { }
