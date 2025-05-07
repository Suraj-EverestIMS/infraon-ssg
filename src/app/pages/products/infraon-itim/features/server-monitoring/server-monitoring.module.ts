import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerMonitoringRoutingModule } from './server-monitoring-routing.module';
import { ServerMonitoringComponent } from './server-monitoring.component';


@NgModule({
  declarations: [
    ServerMonitoringComponent
  ],
  imports: [
    CommonModule,
    ServerMonitoringRoutingModule
  ]
})
export class ServerMonitoringModule { }
