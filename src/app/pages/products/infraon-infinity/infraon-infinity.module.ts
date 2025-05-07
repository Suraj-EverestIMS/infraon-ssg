import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraonInfinityRoutingModule } from './infraon-infinity-routing.module';
import { InfraonInfinityComponent } from './infraon-infinity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UIKITModule } from 'src/app/ui-kit/uikit.module';


@NgModule({
  declarations: [
    InfraonInfinityComponent
  ],
  imports: [
    CommonModule,
    InfraonInfinityRoutingModule,
    ReactiveFormsModule,
    UIKITModule
  ]
})
export class InfraonInfinityModule { }
