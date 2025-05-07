import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonOssRoutingModule } from './infraon-oss-routing.module';
import { InfraonOssComponent } from './infraon-oss.component';


@NgModule({
  declarations: [
    InfraonOssComponent
  ],
  imports: [
    CommonModule,
    InfraonOssRoutingModule
  ]
})
export class InfraonOssModule { }
