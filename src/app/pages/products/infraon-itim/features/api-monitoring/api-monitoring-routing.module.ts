import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiMonitoringComponent } from './api-monitoring.component';

const routes: Routes = [{ path: '', component: ApiMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiMonitoringRoutingModule { }
