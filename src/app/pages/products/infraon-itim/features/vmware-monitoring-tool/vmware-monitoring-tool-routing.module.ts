import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VmwareMonitoringToolComponent } from './vmware-monitoring-tool.component';

const routes: Routes = [{ path: '', component: VmwareMonitoringToolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmwareMonitoringToolRoutingModule { }
