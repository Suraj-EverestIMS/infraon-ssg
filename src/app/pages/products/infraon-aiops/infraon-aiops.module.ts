import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonAiopsRoutingModule } from './infraon-aiops-routing.module';
import { InfraonAiopsComponent } from './infraon-aiops.component';


@NgModule({
  declarations: [
    InfraonAiopsComponent
  ],
  imports: [
    CommonModule,
    InfraonAiopsRoutingModule
  ]
})
export class InfraonAiopsModule { }
