import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsForItServicesRoutingModule } from './assets-for-it-services-routing.module';
import { AssetsForItServicesComponent } from './assets-for-it-services.component';


@NgModule({
  declarations: [
    AssetsForItServicesComponent
  ],
  imports: [
    CommonModule,
    AssetsForItServicesRoutingModule
  ]
})
export class AssetsForItServicesModule { }
