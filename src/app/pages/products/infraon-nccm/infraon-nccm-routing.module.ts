import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonNccmComponent } from './infraon-nccm.component';

const routes: Routes = [{ path: '', component: InfraonNccmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonNccmRoutingModule { }
