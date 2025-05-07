import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonITSMForManufacturingComponent } from './infraon-itsm-for-manufacturing.component';

const routes: Routes = [{ path: '', component: InfraonITSMForManufacturingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonITSMForManufacturingRoutingModule { }
