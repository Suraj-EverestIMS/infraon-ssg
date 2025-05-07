import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfUserRoutingModule } from './terms-of-user-routing.module';
import { TermsOfUserComponent } from './terms-of-user.component';


@NgModule({
  declarations: [
    TermsOfUserComponent
  ],
  imports: [
    CommonModule,
    TermsOfUserRoutingModule
  ]
})
export class TermsOfUserModule { }
