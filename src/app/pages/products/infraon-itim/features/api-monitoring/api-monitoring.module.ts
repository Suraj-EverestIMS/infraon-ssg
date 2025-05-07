import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiMonitoringRoutingModule } from './api-monitoring-routing.module';
import { ApiMonitoringComponent } from './api-monitoring.component';


@NgModule({
  declarations: [
    ApiMonitoringComponent
  ],
  imports: [
    CommonModule,
    ApiMonitoringRoutingModule
  ]
})
export class ApiMonitoringModule { }
