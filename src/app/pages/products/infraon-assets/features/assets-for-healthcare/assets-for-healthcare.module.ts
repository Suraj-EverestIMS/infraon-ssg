import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsForHealthcareRoutingModule } from './assets-for-healthcare-routing.module';
import { AssetsForHealthcareComponent } from './assets-for-healthcare.component';


@NgModule({
  declarations: [
    AssetsForHealthcareComponent
  ],
  imports: [
    CommonModule,
    AssetsForHealthcareRoutingModule
  ]
})
export class AssetsForHealthcareModule { }
