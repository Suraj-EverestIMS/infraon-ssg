import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealTimeNetworkMonitoringRoutingModule } from './real-time-network-monitoring-routing.module';
import { RealTimeNetworkMonitoringComponent } from './real-time-network-monitoring.component';


@NgModule({
  declarations: [
    RealTimeNetworkMonitoringComponent
  ],
  imports: [
    CommonModule,
    RealTimeNetworkMonitoringRoutingModule
  ]
})
export class RealTimeNetworkMonitoringModule { }
