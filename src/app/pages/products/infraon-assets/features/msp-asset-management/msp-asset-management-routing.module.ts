import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MspAssetManagementComponent } from './msp-asset-management.component';

const routes: Routes = [{ path: '', component: MspAssetManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MspAssetManagementRoutingModule { }
