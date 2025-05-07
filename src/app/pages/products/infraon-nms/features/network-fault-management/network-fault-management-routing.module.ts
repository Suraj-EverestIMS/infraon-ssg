import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkFaultManagementComponent } from './network-fault-management.component';

const routes: Routes = [{ path: '', component: NetworkFaultManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkFaultManagementRoutingModule { }
