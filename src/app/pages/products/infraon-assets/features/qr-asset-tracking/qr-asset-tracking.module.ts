import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrAssetTrackingRoutingModule } from './qr-asset-tracking-routing.module';
import { QrAssetTrackingComponent } from './qr-asset-tracking.component';


@NgModule({
  declarations: [
    QrAssetTrackingComponent
  ],
  imports: [
    CommonModule,
    QrAssetTrackingRoutingModule
  ]
})
export class QrAssetTrackingModule { }
