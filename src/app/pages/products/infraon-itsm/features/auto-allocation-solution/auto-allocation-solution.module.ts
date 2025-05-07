import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoAllocationSolutionRoutingModule } from './auto-allocation-solution-routing.module';
import { AutoAllocationSolutionComponent } from './auto-allocation-solution.component';


@NgModule({
  declarations: [
    AutoAllocationSolutionComponent
  ],
  imports: [
    CommonModule,
    AutoAllocationSolutionRoutingModule
  ]
})
export class AutoAllocationSolutionModule { }
