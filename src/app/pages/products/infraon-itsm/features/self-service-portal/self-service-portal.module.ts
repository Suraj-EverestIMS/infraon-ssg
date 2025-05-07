import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfServicePortalRoutingModule } from './self-service-portal-routing.module';
import { SelfServicePortalComponent } from './self-service-portal.component';


@NgModule({
  declarations: [
    SelfServicePortalComponent
  ],
  imports: [
    CommonModule,
    SelfServicePortalRoutingModule
  ]
})
export class SelfServicePortalModule { }
