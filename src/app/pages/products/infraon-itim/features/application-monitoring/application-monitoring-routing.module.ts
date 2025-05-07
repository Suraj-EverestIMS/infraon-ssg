import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationMonitoringComponent } from './application-monitoring.component';

const routes: Routes = [{ path: '', component: ApplicationMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationMonitoringRoutingModule { }
