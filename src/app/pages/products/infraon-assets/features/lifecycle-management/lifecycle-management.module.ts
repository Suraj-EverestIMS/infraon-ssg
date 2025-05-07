import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleManagementRoutingModule } from './lifecycle-management-routing.module';
import { LifecycleManagementComponent } from './lifecycle-management.component';


@NgModule({
  declarations: [
    LifecycleManagementComponent
  ],
  imports: [
    CommonModule,
    LifecycleManagementRoutingModule
  ]
})
export class LifecycleManagementModule { }
