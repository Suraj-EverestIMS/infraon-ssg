import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfServicePortalComponent } from './self-service-portal.component';

const routes: Routes = [{ path: '', component: SelfServicePortalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfServicePortalRoutingModule { }
