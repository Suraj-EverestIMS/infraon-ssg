import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoAllocationSolutionComponent } from './auto-allocation-solution.component';

const routes: Routes = [{ path: '', component: AutoAllocationSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoAllocationSolutionRoutingModule { }
