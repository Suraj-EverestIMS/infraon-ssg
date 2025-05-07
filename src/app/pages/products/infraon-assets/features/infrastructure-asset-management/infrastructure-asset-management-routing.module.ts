import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfrastructureAssetManagementComponent } from './infrastructure-asset-management.component';

const routes: Routes = [{ path: '', component: InfrastructureAssetManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureAssetManagementRoutingModule { }
