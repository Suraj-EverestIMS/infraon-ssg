import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityOfServiceRoutingModule } from './quality-of-service-routing.module';
import { QualityOfServiceComponent } from './quality-of-service.component';


@NgModule({
  declarations: [
    QualityOfServiceComponent
  ],
  imports: [
    CommonModule,
    QualityOfServiceRoutingModule
  ]
})
export class QualityOfServiceModule { }
