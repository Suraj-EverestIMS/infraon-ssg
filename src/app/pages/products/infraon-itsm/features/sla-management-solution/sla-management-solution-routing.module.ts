import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaManagementSolutionComponent } from './sla-management-solution.component';

const routes: Routes = [{ path: '', component: SlaManagementSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaManagementSolutionRoutingModule { }
