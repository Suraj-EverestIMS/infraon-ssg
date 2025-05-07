import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerMonitoringComponent } from './server-monitoring.component';

const routes: Routes = [{ path: '', component: ServerMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerMonitoringRoutingModule { }
