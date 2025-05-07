import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarcodeAssetTrackingRoutingModule } from './barcode-asset-tracking-routing.module';
import { BarcodeAssetTrackingComponent } from './barcode-asset-tracking.component';


@NgModule({
  declarations: [
    BarcodeAssetTrackingComponent
  ],
  imports: [
    CommonModule,
    BarcodeAssetTrackingRoutingModule
  ]
})
export class BarcodeAssetTrackingModule { }
