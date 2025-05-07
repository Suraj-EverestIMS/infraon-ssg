import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDiscoveryComponent } from './asset-discovery.component';

const routes: Routes = [{ path: '', component: AssetDiscoveryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetDiscoveryRoutingModule { }
