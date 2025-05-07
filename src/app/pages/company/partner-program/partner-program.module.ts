import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerProgramRoutingModule } from './partner-program-routing.module';
import { PartnerProgramComponent } from './partner-program.component';


@NgModule({
  declarations: [
    PartnerProgramComponent
  ],
  imports: [
    CommonModule,
    PartnerProgramRoutingModule
  ]
})
export class PartnerProgramModule { }
