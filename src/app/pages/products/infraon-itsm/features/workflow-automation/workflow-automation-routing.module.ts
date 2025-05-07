import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowAutomationComponent } from './workflow-automation.component';

const routes: Routes = [{ path: '', component: WorkflowAutomationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowAutomationRoutingModule { }
