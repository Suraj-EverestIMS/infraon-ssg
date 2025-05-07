import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NmsReportsDashboardRoutingModule } from './nms-reports-dashboard-routing.module';
import { NmsReportsDashboardComponent } from './nms-reports-dashboard.component';


@NgModule({
  declarations: [
    NmsReportsDashboardComponent
  ],
  imports: [
    CommonModule,
    NmsReportsDashboardRoutingModule
  ]
})
export class NmsReportsDashboardModule { }
