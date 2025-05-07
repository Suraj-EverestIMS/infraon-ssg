import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkEventManagementComponent } from './network-event-management.component';

const routes: Routes = [{ path: '', component: NetworkEventManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkEventManagementRoutingModule { }
