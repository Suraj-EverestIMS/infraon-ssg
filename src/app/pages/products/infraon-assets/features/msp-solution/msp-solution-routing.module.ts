import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MspSolutionComponent } from './msp-solution.component';

const routes: Routes = [{ path: '', component: MspSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MspSolutionRoutingModule { }
