import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRequisitionSoftwareRoutingModule } from './purchase-requisition-software-routing.module';
import { PurchaseRequisitionSoftwareComponent } from './purchase-requisition-software.component';


@NgModule({
  declarations: [
    PurchaseRequisitionSoftwareComponent
  ],
  imports: [
    CommonModule,
    PurchaseRequisitionSoftwareRoutingModule
  ]
})
export class PurchaseRequisitionSoftwareModule { }
