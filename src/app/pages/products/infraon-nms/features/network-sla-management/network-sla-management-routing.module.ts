import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkSlaManagementComponent } from './network-sla-management.component';

const routes: Routes = [{ path: '', component: NetworkSlaManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkSlaManagementRoutingModule { }
