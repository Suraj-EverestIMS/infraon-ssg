import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItAssetManagementForBfsiComponent } from './it-asset-management-for-bfsi.component';

const routes: Routes = [{ path: '', component: ItAssetManagementForBfsiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItAssetManagementForBfsiRoutingModule { }
