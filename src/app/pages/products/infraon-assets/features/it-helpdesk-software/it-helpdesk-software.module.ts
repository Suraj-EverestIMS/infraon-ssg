import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItHelpdeskSoftwareRoutingModule } from './it-helpdesk-software-routing.module';
import { ItHelpdeskSoftwareComponent } from './it-helpdesk-software.component';


@NgModule({
  declarations: [
    ItHelpdeskSoftwareComponent
  ],
  imports: [
    CommonModule,
    ItHelpdeskSoftwareRoutingModule
  ]
})
export class ItHelpdeskSoftwareModule { }
