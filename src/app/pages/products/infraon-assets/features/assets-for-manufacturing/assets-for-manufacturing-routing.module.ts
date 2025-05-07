import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsForManufacturingComponent } from './assets-for-manufacturing.component';

const routes: Routes = [{ path: '', component: AssetsForManufacturingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsForManufacturingRoutingModule { }
