import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HypervisorMonitoringSolutionComponent } from './hypervisor-monitoring-solution.component';

const routes: Routes = [{ path: '', component: HypervisorMonitoringSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HypervisorMonitoringSolutionRoutingModule { }
