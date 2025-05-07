import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkPerformenceManagementRoutingModule } from './network-performence-management-routing.module';
import { NetworkPerformenceManagementComponent } from './network-performence-management.component';


@NgModule({
  declarations: [
    NetworkPerformenceManagementComponent
  ],
  imports: [
    CommonModule,
    NetworkPerformenceManagementRoutingModule
  ]
})
export class NetworkPerformenceManagementModule { }
