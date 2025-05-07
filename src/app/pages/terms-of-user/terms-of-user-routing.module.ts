import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfUserComponent } from './terms-of-user.component';

const routes: Routes = [{ path: '', component: TermsOfUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsOfUserRoutingModule { }
