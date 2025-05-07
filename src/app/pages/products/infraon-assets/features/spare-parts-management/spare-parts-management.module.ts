import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SparePartsManagementRoutingModule } from './spare-parts-management-routing.module';
import { SparePartsManagementComponent } from './spare-parts-management.component';


@NgModule({
  declarations: [
    SparePartsManagementComponent
  ],
  imports: [
    CommonModule,
    SparePartsManagementRoutingModule
  ]
})
export class SparePartsManagementModule { }
