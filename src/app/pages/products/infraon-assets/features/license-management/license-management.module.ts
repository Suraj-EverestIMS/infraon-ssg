import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenseManagementRoutingModule } from './license-management-routing.module';
import { LicenseManagementComponent } from './license-management.component';


@NgModule({
  declarations: [
    LicenseManagementComponent
  ],
  imports: [
    CommonModule,
    LicenseManagementRoutingModule
  ]
})
export class LicenseManagementModule { }
