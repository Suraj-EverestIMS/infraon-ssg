import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonAiopsComponent } from './infraon-aiops.component';

const routes: Routes = [{ path: '', component: InfraonAiopsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonAiopsRoutingModule { }
