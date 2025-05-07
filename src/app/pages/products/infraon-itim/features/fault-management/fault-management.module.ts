import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaultManagementRoutingModule } from './fault-management-routing.module';
import { FaultManagementComponent } from './fault-management.component';


@NgModule({
  declarations: [
    FaultManagementComponent
  ],
  imports: [
    CommonModule,
    FaultManagementRoutingModule
  ]
})
export class FaultManagementModule { }
