import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkPerformenceManagementComponent } from './network-performence-management.component';

const routes: Routes = [{ path: '', component: NetworkPerformenceManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkPerformenceManagementRoutingModule { }
