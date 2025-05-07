import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItNetworkMonitoringRoutingModule } from './it-network-monitoring-routing.module';
import { ItNetworkMonitoringComponent } from './it-network-monitoring.component';


@NgModule({
  declarations: [
    ItNetworkMonitoringComponent
  ],
  imports: [
    CommonModule,
    ItNetworkMonitoringRoutingModule
  ]
})
export class ItNetworkMonitoringModule { }
