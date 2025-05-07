import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonItimRoutingModule } from './infraon-itim-routing.module';
import { InfraonItimComponent } from './infraon-itim.component';


@NgModule({
  declarations: [
    InfraonItimComponent
  ],
  imports: [
    CommonModule,
    InfraonItimRoutingModule
  ]
})
export class InfraonItimModule { }
