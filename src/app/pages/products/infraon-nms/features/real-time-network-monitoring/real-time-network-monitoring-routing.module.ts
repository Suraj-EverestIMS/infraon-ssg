import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealTimeNetworkMonitoringComponent } from './real-time-network-monitoring.component';

const routes: Routes = [{ path: '', component: RealTimeNetworkMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealTimeNetworkMonitoringRoutingModule { }
