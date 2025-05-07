import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItReportDashboradRoutingModule } from './it-report-dashborad-routing.module';
import { ItReportDashboradComponent } from './it-report-dashborad.component';


@NgModule({
  declarations: [
    ItReportDashboradComponent
  ],
  imports: [
    CommonModule,
    ItReportDashboradRoutingModule
  ]
})
export class ItReportDashboradModule { }
