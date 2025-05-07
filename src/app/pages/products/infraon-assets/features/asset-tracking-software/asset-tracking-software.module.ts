import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetTrackingSoftwareRoutingModule } from './asset-tracking-software-routing.module';
import { AssetTrackingSoftwareComponent } from './asset-tracking-software.component';


@NgModule({
  declarations: [
    AssetTrackingSoftwareComponent
  ],
  imports: [
    CommonModule,
    AssetTrackingSoftwareRoutingModule
  ]
})
export class AssetTrackingSoftwareModule { }
