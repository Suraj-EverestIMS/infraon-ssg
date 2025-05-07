import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingSolutionRoutingModule } from './manufacturing-solution-routing.module';
import { ManufacturingSolutionComponent } from './manufacturing-solution.component';


@NgModule({
  declarations: [
    ManufacturingSolutionComponent
  ],
  imports: [
    CommonModule,
    ManufacturingSolutionRoutingModule
  ]
})
export class ManufacturingSolutionModule { }
