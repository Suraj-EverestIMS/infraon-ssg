import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonITSMForItServiceSolutionComponent } from './infraon-itsm-for-it-service-solution.component';

const routes: Routes = [{ path: '', component: InfraonITSMForItServiceSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonITSMForItServiceSolutionRoutingModule { }
