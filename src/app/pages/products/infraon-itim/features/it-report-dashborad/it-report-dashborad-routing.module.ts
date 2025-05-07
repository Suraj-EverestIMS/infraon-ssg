import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItReportDashboradComponent } from './it-report-dashborad.component';

const routes: Routes = [{ path: '', component: ItReportDashboradComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItReportDashboradRoutingModule { }
