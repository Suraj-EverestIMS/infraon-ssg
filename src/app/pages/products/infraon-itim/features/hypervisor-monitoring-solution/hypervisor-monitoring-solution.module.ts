import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HypervisorMonitoringSolutionRoutingModule } from './hypervisor-monitoring-solution-routing.module';
import { HypervisorMonitoringSolutionComponent } from './hypervisor-monitoring-solution.component';


@NgModule({
  declarations: [
    HypervisorMonitoringSolutionComponent
  ],
  imports: [
    CommonModule,
    HypervisorMonitoringSolutionRoutingModule
  ]
})
export class HypervisorMonitoringSolutionModule { }
