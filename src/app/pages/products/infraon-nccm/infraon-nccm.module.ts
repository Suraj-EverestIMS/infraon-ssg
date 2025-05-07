import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonNccmRoutingModule } from './infraon-nccm-routing.module';
import { InfraonNccmComponent } from './infraon-nccm.component';


@NgModule({
  declarations: [
    InfraonNccmComponent
  ],
  imports: [
    CommonModule,
    InfraonNccmRoutingModule
  ]
})
export class InfraonNccmModule { }
