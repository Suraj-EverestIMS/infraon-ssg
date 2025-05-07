import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonInfinityComponent } from './infraon-infinity.component';

const routes: Routes = [{ path: '', component: InfraonInfinityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonInfinityRoutingModule { }
