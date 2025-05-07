import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkProtocolsRoutingModule } from './network-protocols-routing.module';
import { NetworkProtocolsComponent } from './network-protocols.component';


@NgModule({
  declarations: [
    NetworkProtocolsComponent
  ],
  imports: [
    CommonModule,
    NetworkProtocolsRoutingModule
  ]
})
export class NetworkProtocolsModule { }
