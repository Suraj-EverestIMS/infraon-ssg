import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketManagementRoutingModule } from './ticket-management-routing.module';
import { TicketManagementComponent } from './ticket-management.component';


@NgModule({
  declarations: [
    TicketManagementComponent
  ],
  imports: [
    CommonModule,
    TicketManagementRoutingModule
  ]
})
export class TicketManagementModule { }
