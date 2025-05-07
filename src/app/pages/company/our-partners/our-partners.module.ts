import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurPartnersRoutingModule } from './our-partners-routing.module';
import { OurPartnersComponent } from './our-partners.component';


@NgModule({
  declarations: [
    OurPartnersComponent
  ],
  imports: [
    CommonModule,
    OurPartnersRoutingModule
  ]
})
export class OurPartnersModule { }
