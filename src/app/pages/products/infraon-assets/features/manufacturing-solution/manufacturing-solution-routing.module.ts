import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturingSolutionComponent } from './manufacturing-solution.component';

const routes: Routes = [{ path: '', component: ManufacturingSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingSolutionRoutingModule { }
