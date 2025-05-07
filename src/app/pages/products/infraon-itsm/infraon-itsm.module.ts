import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonItsmRoutingModule } from './infraon-itsm-routing.module';
import { InfraonItsmComponent } from './infraon-itsm.component';


@NgModule({
  declarations: [
    InfraonItsmComponent
  ],
  imports: [
    CommonModule,
    InfraonItsmRoutingModule
  ]
})
export class InfraonItsmModule { }
