import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MspSolutionRoutingModule } from './msp-solution-routing.module';
import { MspSolutionComponent } from './msp-solution.component';


@NgModule({
  declarations: [
    MspSolutionComponent
  ],
  imports: [
    CommonModule,
    MspSolutionRoutingModule
  ]
})
export class MspSolutionModule { }
