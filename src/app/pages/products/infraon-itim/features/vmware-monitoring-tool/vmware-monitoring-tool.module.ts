import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmwareMonitoringToolRoutingModule } from './vmware-monitoring-tool-routing.module';
import { VmwareMonitoringToolComponent } from './vmware-monitoring-tool.component';


@NgModule({
  declarations: [
    VmwareMonitoringToolComponent
  ],
  imports: [
    CommonModule,
    VmwareMonitoringToolRoutingModule
  ]
})
export class VmwareMonitoringToolModule { }
