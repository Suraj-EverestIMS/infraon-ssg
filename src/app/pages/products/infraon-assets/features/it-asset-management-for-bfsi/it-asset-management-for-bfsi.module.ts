import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItAssetManagementForBfsiRoutingModule } from './it-asset-management-for-bfsi-routing.module';
import { ItAssetManagementForBfsiComponent } from './it-asset-management-for-bfsi.component';


@NgModule({
  declarations: [
    ItAssetManagementForBfsiComponent
  ],
  imports: [
    CommonModule,
    ItAssetManagementForBfsiRoutingModule
  ]
})
export class ItAssetManagementForBfsiModule { }
