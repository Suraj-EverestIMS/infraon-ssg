import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsForEducationInstitutionsComponent } from './assets-for-education-institutions.component';

const routes: Routes = [{ path: '', component: AssetsForEducationInstitutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsForEducationInstitutionsRoutingModule { }
