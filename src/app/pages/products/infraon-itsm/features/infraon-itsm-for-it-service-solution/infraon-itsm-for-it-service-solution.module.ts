import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonITSMForItServiceSolutionRoutingModule } from './infraon-itsm-for-it-service-solution-routing.module';
import { InfraonITSMForItServiceSolutionComponent } from './infraon-itsm-for-it-service-solution.component';


@NgModule({
  declarations: [
    InfraonITSMForItServiceSolutionComponent
  ],
  imports: [
    CommonModule,
    InfraonITSMForItServiceSolutionRoutingModule
  ]
})
export class InfraonITSMForItServiceSolutionModule { }
