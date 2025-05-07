import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedAssetManagementComponent } from './fixed-asset-management.component';

const routes: Routes = [{ path: '', component: FixedAssetManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedAssetManagementRoutingModule { }
