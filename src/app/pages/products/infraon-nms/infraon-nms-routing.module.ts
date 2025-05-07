import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonNmsComponent } from './infraon-nms.component';

const routes: Routes = [
  { path: '', component: InfraonNmsComponent }, 
  { path: 'network-discovery', loadChildren: () => import('./features/network-discovery/network-discovery.module').then(m => m.NetworkDiscoveryModule) }, 
  { path: 'network-performence-management', loadChildren: () => import('./features/network-performence-management/network-performence-management.module').then(m => m.NetworkPerformenceManagementModule) }, 
  { path: 'network-fault-management', loadChildren: () => import('./features/network-fault-management/network-fault-management.module').then(m => m.NetworkFaultManagementModule) }, 
  { path: 'network-event-management', loadChildren: () => import('./features/network-event-management/network-event-management.module').then(m => m.NetworkEventManagementModule) }, 
  { path: 'network-inventory-management', loadChildren: () => import('./features/network-inventory-management/network-inventory-management.module').then(m => m.NetworkInventoryManagementModule) }, 
  { path: 'nms-reports-dashboard', loadChildren: () => import('./features/nms-reports-dashboard/nms-reports-dashboard.module').then(m => m.NmsReportsDashboardModule) }, 
  { path: 'quality-of-service', loadChildren: () => import('./features/quality-of-service/quality-of-service.module').then(m => m.QualityOfServiceModule) }, 
  { path: 'network-protocols', loadChildren: () => import('./features/network-protocols/network-protocols.module').then(m => m.NetworkProtocolsModule) }, 
  { path: 'network-topology', loadChildren: () => import('./features/network-topology/network-topology.module').then(m => m.NetworkTopologyModule) }, 
  { path: 'network-sla-management', loadChildren: () => import('./features/network-sla-management/network-sla-management.module').then(m => m.NetworkSlaManagementModule) }, 
  { path: 'network-switch-management', loadChildren: () => import('./features/network-switch-management/network-switch-management.module').then(m => m.NetworkSwitchManagementModule) }, 
  { path: 'real-time-network-monitoring', loadChildren: () => import('./features/real-time-network-monitoring/real-time-network-monitoring.module').then(m => m.RealTimeNetworkMonitoringModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonNmsRoutingModule { }
