import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetTrackingSoftwareComponent } from './asset-tracking-software.component';

const routes: Routes = [{ path: '', component: AssetTrackingSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetTrackingSoftwareRoutingModule { }
