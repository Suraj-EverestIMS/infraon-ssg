import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortMonitoringComponent } from './port-monitoring.component';

const routes: Routes = [{ path: '', component: PortMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortMonitoringRoutingModule { }
