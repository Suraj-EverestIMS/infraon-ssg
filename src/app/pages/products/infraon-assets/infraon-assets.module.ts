import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonAssetsRoutingModule } from './infraon-assets-routing.module';
import { InfraonAssetsComponent } from './infraon-assets.component';


@NgModule({
  declarations: [
    InfraonAssetsComponent
  ],
  imports: [
    CommonModule,
    InfraonAssetsRoutingModule
  ]
})
export class InfraonAssetsModule { }
