import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItAssetManagementComponent } from './it-asset-management.component';

const routes: Routes = [{ path: '', component: ItAssetManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItAssetManagementRoutingModule { }
