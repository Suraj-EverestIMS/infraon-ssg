import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonITSMForEducationInstitutionsComponent } from './infraon-itsm-for-education-institutions.component';

const routes: Routes = [{ path: '', component: InfraonITSMForEducationInstitutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonITSMForEducationInstitutionsRoutingModule { }
