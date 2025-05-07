import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkInventoryManagementComponent } from './network-inventory-management.component';

const routes: Routes = [{ path: '', component: NetworkInventoryManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkInventoryManagementRoutingModule { }
