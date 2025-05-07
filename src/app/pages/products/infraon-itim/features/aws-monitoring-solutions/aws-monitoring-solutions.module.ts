import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwsMonitoringSolutionsRoutingModule } from './aws-monitoring-solutions-routing.module';
import { AwsMonitoringSolutionsComponent } from './aws-monitoring-solutions.component';


@NgModule({
  declarations: [
    AwsMonitoringSolutionsComponent
  ],
  imports: [
    CommonModule,
    AwsMonitoringSolutionsRoutingModule
  ]
})
export class AwsMonitoringSolutionsModule { }
