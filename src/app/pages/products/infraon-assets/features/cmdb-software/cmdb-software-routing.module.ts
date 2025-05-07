import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdbSoftwareComponent } from './cmdb-software.component';

const routes: Routes = [{ path: '', component: CmdbSoftwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdbSoftwareRoutingModule { }
