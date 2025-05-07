import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleManagementComponent } from './lifecycle-management.component';

const routes: Routes = [{ path: '', component: LifecycleManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleManagementRoutingModule { }
