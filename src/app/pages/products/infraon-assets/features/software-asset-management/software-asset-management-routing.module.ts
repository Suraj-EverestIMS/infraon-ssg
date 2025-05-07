import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareAssetManagementComponent } from './software-asset-management.component';

const routes: Routes = [{ path: '', component: SoftwareAssetManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareAssetManagementRoutingModule { }
