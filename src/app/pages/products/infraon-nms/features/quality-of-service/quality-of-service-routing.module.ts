import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualityOfServiceComponent } from './quality-of-service.component';

const routes: Routes = [{ path: '', component: QualityOfServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityOfServiceRoutingModule { }
