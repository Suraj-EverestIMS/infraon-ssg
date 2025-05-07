import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItEventManagementRoutingModule } from './it-event-management-routing.module';
import { ItEventManagementComponent } from './it-event-management.component';


@NgModule({
  declarations: [
    ItEventManagementComponent
  ],
  imports: [
    CommonModule,
    ItEventManagementRoutingModule
  ]
})
export class ItEventManagementModule { }
