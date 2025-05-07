import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrAssetTrackingComponent } from './qr-asset-tracking.component';

const routes: Routes = [{ path: '', component: QrAssetTrackingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrAssetTrackingRoutingModule { }
