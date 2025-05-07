import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteUrlMonitoringRoutingModule } from './website-url-monitoring-routing.module';
import { WebsiteUrlMonitoringComponent } from './website-url-monitoring.component';


@NgModule({
  declarations: [
    WebsiteUrlMonitoringComponent
  ],
  imports: [
    CommonModule,
    WebsiteUrlMonitoringRoutingModule
  ]
})
export class WebsiteUrlMonitoringModule { }
