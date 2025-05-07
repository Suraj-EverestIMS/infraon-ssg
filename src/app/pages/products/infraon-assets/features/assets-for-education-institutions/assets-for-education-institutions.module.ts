import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsForEducationInstitutionsRoutingModule } from './assets-for-education-institutions-routing.module';
import { AssetsForEducationInstitutionsComponent } from './assets-for-education-institutions.component';


@NgModule({
  declarations: [
    AssetsForEducationInstitutionsComponent
  ],
  imports: [
    CommonModule,
    AssetsForEducationInstitutionsRoutingModule
  ]
})
export class AssetsForEducationInstitutionsModule { }
