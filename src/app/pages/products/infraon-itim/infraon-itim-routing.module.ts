import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonItimComponent } from './infraon-itim.component';

const routes: Routes = [
  { path: '', component: InfraonItimComponent }, 
  { path: 'features/it-event-management', loadChildren: () => import('./features/it-event-management/it-event-management.module').then(m => m.ItEventManagementModule) }, 
  { path: 'features/application-monitoring', loadChildren: () => import('./features/application-monitoring/application-monitoring.module').then(m => m.ApplicationMonitoringModule) }, 
  { path: 'features/api-monitoring', loadChildren: () => import('./features/api-monitoring/api-monitoring.module').then(m => m.ApiMonitoringModule) }, 
  { path: 'features/fault-management', loadChildren: () => import('./features/fault-management/fault-management.module').then(m => m.FaultManagementModule) }, 
  { path: 'features/inventory-management', loadChildren: () => import('./features/inventory-management/inventory-management.module').then(m => m.InventoryManagementModule) }, 
  { path: 'features/it-network-monitoring', loadChildren: () => import('./features/it-network-monitoring/it-network-monitoring.module').then(m => m.ItNetworkMonitoringModule) }, 
  { path: 'features/sla-management', loadChildren: () => import('./features/sla-management/sla-management.module').then(m => m.SlaManagementModule) }, 
  { path: 'features/website-url-monitoring', loadChildren: () => import('./features/website-url-monitoring/website-url-monitoring.module').then(m => m.WebsiteUrlMonitoringModule) }, 
  { path: 'features/server-monitoring', loadChildren: () => import('./features/server-monitoring/server-monitoring.module').then(m => m.ServerMonitoringModule) }, 
  { path: 'features/it-report-dashborad', loadChildren: () => import('./features/it-report-dashborad/it-report-dashborad.module').then(m => m.ItReportDashboradModule) }, 
  { path: 'features/port-monitoring', loadChildren: () => import('./features/port-monitoring/port-monitoring.module').then(m => m.PortMonitoringModule) }, 
  { path: 'features/cloud-monitoring-solutions', loadChildren: () => import('./features/cloud-monitoring-solutions/cloud-monitoring-solutions.module').then(m => m.CloudMonitoringSolutionsModule) }, 
  { path: 'features/aws-monitoring-solutions', loadChildren: () => import('./features/aws-monitoring-solutions/aws-monitoring-solutions.module').then(m => m.AwsMonitoringSolutionsModule) }, 
  { path: 'features/hybrid-cloud-monitoring', loadChildren: () => import('./features/hybrid-cloud-monitoring/hybrid-cloud-monitoring.module').then(m => m.HybridCloudMonitoringModule) }, 
  { path: 'features/hypervisor-monitoring-solution', loadChildren: () => import('./features/hypervisor-monitoring-solution/hypervisor-monitoring-solution.module').then(m => m.HypervisorMonitoringSolutionModule) }, 
  { path: 'features/vmware-monitoring-tool', loadChildren: () => import('./features/vmware-monitoring-tool/vmware-monitoring-tool.module').then(m => m.VmwareMonitoringToolModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonItimRoutingModule { }
