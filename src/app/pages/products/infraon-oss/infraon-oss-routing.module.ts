import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonOssComponent } from './infraon-oss.component';

const routes: Routes = [{ path: '', component: InfraonOssComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonOssRoutingModule { }
