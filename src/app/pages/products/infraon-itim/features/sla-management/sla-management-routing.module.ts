import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaManagementComponent } from './sla-management.component';

const routes: Routes = [{ path: '', component: SlaManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaManagementRoutingModule { }
