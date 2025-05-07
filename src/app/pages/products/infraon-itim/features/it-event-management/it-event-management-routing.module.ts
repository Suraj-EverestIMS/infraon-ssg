import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItEventManagementComponent } from './it-event-management.component';

const routes: Routes = [{ path: '', component: ItEventManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItEventManagementRoutingModule { }
