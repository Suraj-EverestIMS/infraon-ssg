import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseRequisitionSoftwareComponent } from './purchase-requisition-software.component';

const routes: Routes = [{ path: '', component: PurchaseRequisitionSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRequisitionSoftwareRoutingModule { }
