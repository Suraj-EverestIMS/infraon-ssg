import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeManagementSoftwareComponent } from './knowledge-management-software.component';

const routes: Routes = [{ path: '', component: KnowledgeManagementSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeManagementSoftwareRoutingModule { }
