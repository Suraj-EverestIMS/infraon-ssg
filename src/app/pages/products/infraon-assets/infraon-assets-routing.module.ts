import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfraonAssetsComponent } from './infraon-assets.component';

const routes: Routes = [
  { path: '', component: InfraonAssetsComponent },
  { path: 'features/hardware-assets-management-solutions', loadChildren: () => import('./features/hardware-asset-management/hardware-asset-management.module').then(m => m.HardwareAssetManagementModule) },
  { path: 'features/software-assets-management-solutions', loadChildren: () => import('./features/software-asset-management/software-asset-management.module').then(m => m.SoftwareAssetManagementModule) },
  { path: 'features/it-assets-management-solutions', loadChildren: () => import('./features/it-asset-management/it-asset-management.module').then(m => m.ItAssetManagementModule) },
  { path: 'features/it-asset-lifecycle-management-software', loadChildren: () => import('./features/lifecycle-management/lifecycle-management.module').then(m => m.LifecycleManagementModule) },
  { path: 'features/software-license-management', loadChildren: () => import('./features/license-management/license-management.module').then(m => m.LicenseManagementModule) },
  { path: 'features/fixed-asset-management-software', loadChildren: () => import('./features/fixed-asset-management/fixed-asset-management.module').then(m => m.FixedAssetManagementModule) },
  { path: 'features/barcode-asset-tracking-software', loadChildren: () => import('./features/barcode-asset-tracking/barcode-asset-tracking.module').then(m => m.BarcodeAssetTrackingModule) },
  { path: 'features/qr-code-asset-tracking-software', loadChildren: () => import('./features/qr-asset-tracking/qr-asset-tracking.module').then(m => m.QrAssetTrackingModule) },
  { path: 'features/cmdb-software', loadChildren: () => import('./features/cmdb-software/cmdb-software.module').then(m => m.CmdbSoftwareModule) },
  { path: 'features/it-asset-discovery', loadChildren: () => import('./features/asset-discovery/asset-discovery.module').then(m => m.AssetDiscoveryModule) },
  { path: 'features/asset-tracking-software', loadChildren: () => import('./features/asset-tracking-software/asset-tracking-software.module').then(m => m.AssetTrackingSoftwareModule) },
  { path: 'features/spare-parts-management-system', loadChildren: () => import('./features/spare-parts-management/spare-parts-management.module').then(m => m.SparePartsManagementModule) },
  { path: 'features/manufacturing-solution', loadChildren: () => import('./features/manufacturing-solution/manufacturing-solution.module').then(m => m.ManufacturingSolutionModule) },
  { path: 'features/msp-solution', loadChildren: () => import('./features/msp-solution/msp-solution.module').then(m => m.MspSolutionModule) },
  { path: 'features/ticket-management-solutions', loadChildren: () => import('./features/ticket-management/ticket-management.module').then(m => m.TicketManagementModule) },
  { path: 'features/it-helpdesk-software', loadChildren: () => import('./features/it-helpdesk-software/it-helpdesk-software.module').then(m => m.ItHelpdeskSoftwareModule) },
  { path: 'features/asset-verification-and-audit-solution', loadChildren: () => import('./features/asset-verification-and-audit-solution/asset-verification-and-audit-solution.module').then(m => m.AssetVerificationAndAuditSolutionModule) },
  { path: 'features/infrastructure-asset-management-software', loadChildren: () => import('./features/infrastructure-asset-management/infrastructure-asset-management.module').then(m => m.InfrastructureAssetManagementModule) },
  { path: 'features/msp-asset-management-software', loadChildren: () => import('./features/msp-asset-management/msp-asset-management.module').then(m => m.MspAssetManagementModule) },
  { path: 'features/it-service-solutions', loadChildren: () => import('./features/assets-for-it-services/assets-for-it-services.module').then(m => m.AssetsForItServicesModule) },
  { path: 'features/Infraon-Assets-for-education-institutions', loadChildren: () => import('./features/assets-for-education-institutions/assets-for-education-institutions.module').then(m => m.AssetsForEducationInstitutionsModule) },
  { path: 'features/Infraon-Assets-for-healthcare', loadChildren: () => import('./features/assets-for-healthcare/assets-for-healthcare.module').then(m => m.AssetsForHealthcareModule) },
  { path: 'features/Infraon-Assets-for-manufacturing', loadChildren: () => import('./features/assets-for-manufacturing/assets-for-manufacturing.module').then(m => m.AssetsForManufacturingModule) },
  { path: 'features/Infraon-ITAM-for-BFSI', loadChildren: () => import('./features/it-asset-management-for-bfsi/it-asset-management-for-bfsi.module').then(m => m.ItAssetManagementForBfsiModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraonAssetsRoutingModule { }
