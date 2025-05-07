import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonITSMForBFSIRoutingModule } from './infraon-itsm-for-bfsi-routing.module';
import { InfraonITSMForBFSIComponent } from './infraon-itsm-for-bfsi.component';


@NgModule({
  declarations: [
    InfraonITSMForBFSIComponent
  ],
  imports: [
    CommonModule,
    InfraonITSMForBFSIRoutingModule
  ]
})
export class InfraonITSMForBFSIModule { }
