import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementSolutionComponent } from './task-management-solution.component';

const routes: Routes = [{ path: '', component: TaskManagementSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementSolutionRoutingModule { }
