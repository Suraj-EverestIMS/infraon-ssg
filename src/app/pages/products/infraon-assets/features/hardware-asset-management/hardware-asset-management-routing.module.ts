import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwareAssetManagementComponent } from './hardware-asset-management.component';

const routes: Routes = [{ path: '', component: HardwareAssetManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HardwareAssetManagementRoutingModule { }
