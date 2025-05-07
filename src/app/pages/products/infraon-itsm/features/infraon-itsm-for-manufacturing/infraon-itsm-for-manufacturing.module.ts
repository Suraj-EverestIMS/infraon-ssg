import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonITSMForManufacturingRoutingModule } from './infraon-itsm-for-manufacturing-routing.module';
import { InfraonITSMForManufacturingComponent } from './infraon-itsm-for-manufacturing.component';


@NgModule({
  declarations: [
    InfraonITSMForManufacturingComponent
  ],
  imports: [
    CommonModule,
    InfraonITSMForManufacturingRoutingModule
  ]
})
export class InfraonITSMForManufacturingModule { }
