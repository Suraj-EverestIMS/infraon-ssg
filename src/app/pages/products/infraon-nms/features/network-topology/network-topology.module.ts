import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkTopologyRoutingModule } from './network-topology-routing.module';
import { NetworkTopologyComponent } from './network-topology.component';


@NgModule({
  declarations: [
    NetworkTopologyComponent
  ],
  imports: [
    CommonModule,
    NetworkTopologyRoutingModule
  ]
})
export class NetworkTopologyModule { }
