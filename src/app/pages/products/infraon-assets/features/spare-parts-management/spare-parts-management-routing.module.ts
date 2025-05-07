import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparePartsManagementComponent } from './spare-parts-management.component';

const routes: Routes = [{ path: '', component: SparePartsManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SparePartsManagementRoutingModule { }
