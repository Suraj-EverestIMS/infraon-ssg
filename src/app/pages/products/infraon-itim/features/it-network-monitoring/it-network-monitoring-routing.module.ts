import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItNetworkMonitoringComponent } from './it-network-monitoring.component';

const routes: Routes = [{ path: '', component: ItNetworkMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItNetworkMonitoringRoutingModule { }
