import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HybridCloudMonitoringRoutingModule } from './hybrid-cloud-monitoring-routing.module';
import { HybridCloudMonitoringComponent } from './hybrid-cloud-monitoring.component';


@NgModule({
  declarations: [
    HybridCloudMonitoringComponent
  ],
  imports: [
    CommonModule,
    HybridCloudMonitoringRoutingModule
  ]
})
export class HybridCloudMonitoringModule { }
