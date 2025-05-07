import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetVerificationAndAuditSolutionRoutingModule } from './asset-verification-and-audit-solution-routing.module';
import { AssetVerificationAndAuditSolutionComponent } from './asset-verification-and-audit-solution.component';


@NgModule({
  declarations: [
    AssetVerificationAndAuditSolutionComponent
  ],
  imports: [
    CommonModule,
    AssetVerificationAndAuditSolutionRoutingModule
  ]
})
export class AssetVerificationAndAuditSolutionModule { }
