import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkInventoryManagementRoutingModule } from './network-inventory-management-routing.module';
import { NetworkInventoryManagementComponent } from './network-inventory-management.component';


@NgModule({
  declarations: [
    NetworkInventoryManagementComponent
  ],
  imports: [
    CommonModule,
    NetworkInventoryManagementRoutingModule
  ]
})
export class NetworkInventoryManagementModule { }
