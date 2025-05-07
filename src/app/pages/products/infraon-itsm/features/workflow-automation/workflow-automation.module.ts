import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowAutomationRoutingModule } from './workflow-automation-routing.module';
import { WorkflowAutomationComponent } from './workflow-automation.component';


@NgModule({
  declarations: [
    WorkflowAutomationComponent
  ],
  imports: [
    CommonModule,
    WorkflowAutomationRoutingModule
  ]
})
export class WorkflowAutomationModule { }
