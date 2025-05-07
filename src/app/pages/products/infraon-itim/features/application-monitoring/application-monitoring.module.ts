import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationMonitoringRoutingModule } from './application-monitoring-routing.module';
import { ApplicationMonitoringComponent } from './application-monitoring.component';


@NgModule({
  declarations: [
    ApplicationMonitoringComponent
  ],
  imports: [
    CommonModule,
    ApplicationMonitoringRoutingModule
  ]
})
export class ApplicationMonitoringModule { }
