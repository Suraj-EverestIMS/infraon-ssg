import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteUrlMonitoringComponent } from './website-url-monitoring.component';

const routes: Routes = [{ path: '', component: WebsiteUrlMonitoringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteUrlMonitoringRoutingModule { }
