import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixedAssetManagementRoutingModule } from './fixed-asset-management-routing.module';
import { FixedAssetManagementComponent } from './fixed-asset-management.component';


@NgModule({
  declarations: [
    FixedAssetManagementComponent
  ],
  imports: [
    CommonModule,
    FixedAssetManagementRoutingModule
  ]
})
export class FixedAssetManagementModule { }
