import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudMonitoringSolutionsRoutingModule } from './cloud-monitoring-solutions-routing.module';
import { CloudMonitoringSolutionsComponent } from './cloud-monitoring-solutions.component';


@NgModule({
  declarations: [
    CloudMonitoringSolutionsComponent
  ],
  imports: [
    CommonModule,
    CloudMonitoringSolutionsRoutingModule
  ]
})
export class CloudMonitoringSolutionsModule { }
