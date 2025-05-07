import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonItsmComponent } from './infraon-itsm.component';

const routes: Routes = [
  { path: '', component: InfraonItsmComponent }, 
  { path: 'event-management', loadChildren: () => import('./features/event-management/event-management.module').then(m => m.EventManagementModule) }, 
  { path: 'self-service-portal', loadChildren: () => import('./features/self-service-portal/self-service-portal.module').then(m => m.SelfServicePortalModule) }, 
  { path: 'catalog-management', loadChildren: () => import('./features/catalog-management/catalog-management.module').then(m => m.CatalogManagementModule) }, 
  { path: 'workflow-automation', loadChildren: () => import('./features/workflow-automation/workflow-automation.module').then(m => m.WorkflowAutomationModule) }, 
  { path: 'incident-management-software', loadChildren: () => import('./features/incident-management-software/incident-management-software.module').then(m => m.IncidentManagementSoftwareModule) }, 
  { path: 'problem-management-software', loadChildren: () => import('./features/problem-management-software/problem-management-software.module').then(m => m.ProblemManagementSoftwareModule) }, 
  { path: 'change-management-software', loadChildren: () => import('./features/change-management-software/change-management-software.module').then(m => m.ChangeManagementSoftwareModule) }, 
  { path: 'knowledge-management-software', loadChildren: () => import('./features/knowledge-management-software/knowledge-management-software.module').then(m => m.KnowledgeManagementSoftwareModule) }, 
  { path: 'service-request-management', loadChildren: () => import('./features/service-request-management/service-request-management.module').then(m => m.ServiceRequestManagementModule) }, 
  { path: 'sla-management-solution', loadChildren: () => import('./features/sla-management-solution/sla-management-solution.module').then(m => m.SlaManagementSolutionModule) }, 
  { path: 'release-management-solution', loadChildren: () => import('./features/release-management-solution/release-management-solution.module').then(m => m.ReleaseManagementSolutionModule) }, 
  { path: 'task-management-solution', loadChildren: () => import('./features/task-management-solution/task-management-solution.module').then(m => m.TaskManagementSolutionModule) }, 
  { path: 'utility-management-software', loadChildren: () => import('./features/utility-management-software/utility-management-software.module').then(m => m.UtilityManagementSoftwareModule) }, 
  { path: 'purchase-requisition-software', loadChildren: () => import('./features/purchase-requisition-software/purchase-requisition-software.module').then(m => m.PurchaseRequisitionSoftwareModule) }, 
  { path: 'auto-allocation-solution', loadChildren: () => import('./features/auto-allocation-solution/auto-allocation-solution.module').then(m => m.AutoAllocationSolutionModule) }, 
  { path: 'enterprise-service-management', loadChildren: () => import('./features/enterprise-service-management/enterprise-service-management.module').then(m => m.EnterpriseServiceManagementModule) }, 
  { path: 'equipment-maintenance-software', loadChildren: () => import('./features/equipment-maintenance-software/equipment-maintenance-software.module').then(m => m.EquipmentMaintenanceSoftwareModule) }, 
  { path: 'leave-management-solution', loadChildren: () => import('./features/leave-management-solution/leave-management-solution.module').then(m => m.LeaveManagementSolutionModule) }, 
  { path: 'project-management-solution', loadChildren: () => import('./features/project-management-solution/project-management-solution.module').then(m => m.ProjectManagementSolutionModule) }, 
  { path: 'Infraon-ITSM-for-it-service-solution', loadChildren: () => import('./features/infraon-itsm-for-it-service-solution/infraon-itsm-for-it-service-solution.module').then(m => m.InfraonITSMForItServiceSolutionModule) }, 
  { path: 'Infraon-ITSM-for-education-institutions', loadChildren: () => import('./features/infraon-itsm-for-education-institutions/infraon-itsm-for-education-institutions.module').then(m => m.InfraonITSMForEducationInstitutionsModule) }, 
  { path: 'Infraon-ITSM-for-healthcare', loadChildren: () => import('./features/infraon-itsm-for-healthcare/infraon-itsm-for-healthcare.module').then(m => m.InfraonITSMForHealthcareModule) }, 
  { path: 'Infraon-ITSM-for-manufacturing', loadChildren: () => import('./features/infraon-itsm-for-manufacturing/infraon-itsm-for-manufacturing.module').then(m => m.InfraonITSMForManufacturingModule) }, 
  { path: 'Infraon-ITSM-for-BFSI', loadChildren: () => import('./features/infraon-itsm-for-bfsi/infraon-itsm-for-bfsi.module').then(m => m.InfraonITSMForBFSIModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonItsmRoutingModule { }
