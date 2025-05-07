import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkDiscoveryRoutingModule } from './network-discovery-routing.module';
import { NetworkDiscoveryComponent } from './network-discovery.component';


@NgModule({
  declarations: [
    NetworkDiscoveryComponent
  ],
  imports: [
    CommonModule,
    NetworkDiscoveryRoutingModule
  ]
})
export class NetworkDiscoveryModule { }
