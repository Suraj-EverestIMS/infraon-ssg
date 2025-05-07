import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudMonitoringSolutionsComponent } from './cloud-monitoring-solutions.component';

const routes: Routes = [{ path: '', component: CloudMonitoringSolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudMonitoringSolutionsRoutingModule { }
