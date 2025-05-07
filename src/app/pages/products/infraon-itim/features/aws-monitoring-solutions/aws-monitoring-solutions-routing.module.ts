import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsMonitoringSolutionsComponent } from './aws-monitoring-solutions.component';

const routes: Routes = [{ path: '', component: AwsMonitoringSolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwsMonitoringSolutionsRoutingModule { }
