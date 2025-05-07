import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsForItServicesComponent } from './assets-for-it-services.component';

const routes: Routes = [{ path: '', component: AssetsForItServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsForItServicesRoutingModule { }
