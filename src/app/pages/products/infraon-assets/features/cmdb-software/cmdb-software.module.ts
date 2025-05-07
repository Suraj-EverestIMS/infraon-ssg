import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmdbSoftwareRoutingModule } from './cmdb-software-routing.module';
import { CmdbSoftwareComponent } from './cmdb-software.component';


@NgModule({
  declarations: [
    CmdbSoftwareComponent
  ],
  imports: [
    CommonModule,
    CmdbSoftwareRoutingModule
  ]
})
export class CmdbSoftwareModule { }
