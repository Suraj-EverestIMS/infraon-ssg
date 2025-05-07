import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItAssetManagementRoutingModule } from './it-asset-management-routing.module';
import { ItAssetManagementComponent } from './it-asset-management.component';


@NgModule({
  declarations: [
    ItAssetManagementComponent
  ],
  imports: [
    CommonModule,
    ItAssetManagementRoutingModule
  ]
})
export class ItAssetManagementModule { }
