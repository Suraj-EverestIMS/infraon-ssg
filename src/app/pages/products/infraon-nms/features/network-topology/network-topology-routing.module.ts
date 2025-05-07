import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkTopologyComponent } from './network-topology.component';

const routes: Routes = [{ path: '', component: NetworkTopologyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkTopologyRoutingModule { }
