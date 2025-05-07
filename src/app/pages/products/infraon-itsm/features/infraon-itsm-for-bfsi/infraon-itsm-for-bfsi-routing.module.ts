import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonITSMForBFSIComponent } from './infraon-itsm-for-bfsi.component';

const routes: Routes = [{ path: '', component: InfraonITSMForBFSIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonITSMForBFSIRoutingModule { }
