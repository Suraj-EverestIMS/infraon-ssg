import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonITSMForHealthcareComponent } from './infraon-itsm-for-healthcare.component';

const routes: Routes = [{ path: '', component: InfraonITSMForHealthcareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonITSMForHealthcareRoutingModule { }
