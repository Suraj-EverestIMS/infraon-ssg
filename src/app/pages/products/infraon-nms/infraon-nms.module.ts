import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonNmsRoutingModule } from './infraon-nms-routing.module';
import { InfraonNmsComponent } from './infraon-nms.component';


@NgModule({
  declarations: [
    InfraonNmsComponent
  ],
  imports: [
    CommonModule,
    InfraonNmsRoutingModule
  ]
})
export class InfraonNmsModule { }
