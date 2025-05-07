import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonITSMForHealthcareRoutingModule } from './infraon-itsm-for-healthcare-routing.module';
import { InfraonITSMForHealthcareComponent } from './infraon-itsm-for-healthcare.component';


@NgModule({
  declarations: [
    InfraonITSMForHealthcareComponent
  ],
  imports: [
    CommonModule,
    InfraonITSMForHealthcareRoutingModule
  ]
})
export class InfraonITSMForHealthcareModule { }
