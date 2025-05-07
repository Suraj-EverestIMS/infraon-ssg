import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkProtocolsComponent } from './network-protocols.component';

const routes: Routes = [{ path: '', component: NetworkProtocolsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkProtocolsRoutingModule { }
