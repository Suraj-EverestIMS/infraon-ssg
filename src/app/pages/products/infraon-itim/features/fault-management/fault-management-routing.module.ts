import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaultManagementComponent } from './fault-management.component';

const routes: Routes = [{ path: '', component: FaultManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaultManagementRoutingModule { }
