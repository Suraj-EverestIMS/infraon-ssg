import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDiscoveryRoutingModule } from './asset-discovery-routing.module';
import { AssetDiscoveryComponent } from './asset-discovery.component';


@NgModule({
  declarations: [
    AssetDiscoveryComponent
  ],
  imports: [
    CommonModule,
    AssetDiscoveryRoutingModule
  ]
})
export class AssetDiscoveryModule { }
