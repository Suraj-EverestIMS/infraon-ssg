import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HybridCloudMonitoringComponent } from './hybrid-cloud-monitoring.component';

const routes: Routes = [{ path: '', component: HybridCloudMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HybridCloudMonitoringRoutingModule { }
