import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NmsReportsDashboardComponent } from './nms-reports-dashboard.component';

const routes: Routes = [{ path: '', component: NmsReportsDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NmsReportsDashboardRoutingModule { }
