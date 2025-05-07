import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeManagementSoftwareRoutingModule } from './knowledge-management-software-routing.module';
import { KnowledgeManagementSoftwareComponent } from './knowledge-management-software.component';


@NgModule({
  declarations: [
    KnowledgeManagementSoftwareComponent
  ],
  imports: [
    CommonModule,
    KnowledgeManagementSoftwareRoutingModule
  ]
})
export class KnowledgeManagementSoftwareModule { }
