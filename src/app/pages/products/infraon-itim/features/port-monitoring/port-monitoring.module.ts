import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortMonitoringRoutingModule } from './port-monitoring-routing.module';
import { PortMonitoringComponent } from './port-monitoring.component';


@NgModule({
  declarations: [
    PortMonitoringComponent
  ],
  imports: [
    CommonModule,
    PortMonitoringRoutingModule
  ]
})
export class PortMonitoringModule { }
