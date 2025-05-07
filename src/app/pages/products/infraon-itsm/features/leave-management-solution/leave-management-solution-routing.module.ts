import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveManagementSolutionComponent } from './leave-management-solution.component';

const routes: Routes = [{ path: '', component: LeaveManagementSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveManagementSolutionRoutingModule { }
