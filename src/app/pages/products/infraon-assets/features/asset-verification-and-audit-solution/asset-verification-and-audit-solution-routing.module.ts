import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetVerificationAndAuditSolutionComponent } from './asset-verification-and-audit-solution.component';

const routes: Routes = [{ path: '', component: AssetVerificationAndAuditSolutionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetVerificationAndAuditSolutionRoutingModule { }
