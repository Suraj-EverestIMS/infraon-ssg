import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsForManufacturingRoutingModule } from './assets-for-manufacturing-routing.module';
import { AssetsForManufacturingComponent } from './assets-for-manufacturing.component';


@NgModule({
  declarations: [
    AssetsForManufacturingComponent
  ],
  imports: [
    CommonModule,
    AssetsForManufacturingRoutingModule
  ]
})
export class AssetsForManufacturingModule { }
