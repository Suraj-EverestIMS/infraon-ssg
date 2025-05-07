import { Injectable } from '@angular/core';
import { Feature } from '../interface/feature.model';

@Injectable({ providedIn: 'root' })
export class FeatureService {
  private featureMap: { [productId: string]: Feature[] } = {
    'asset-management-software': [
        { title: 'Hardware Asset Management', route: '/asset-management-software/features/hardware-assets-management-solutions', showInInfinity: false, type: 'none' },
        { title: 'Software Asset Management', route: '/asset-management-software/features/software-assets-management-solutions', showInInfinity: true, type: 'none' },
        { title: 'IT Asset Management', route: '/asset-management-software/features/it-assets-management-solutions', showInInfinity: true, type: 'none' },
        { title: 'IT Asset Lifecycle Management', route: '/asset-management-software/features/it-asset-lifecycle-management-software', showInInfinity: false, type: 'core' },
        { title: 'Software License Management', route: '/asset-management-software/features/software-license-management', showInInfinity: false, type: 'core' },
        { title: 'Fixed Asset Management', route: '/asset-management-software/features/fixed-asset-management-software', showInInfinity: false, type: 'core' },
        { title: 'Barcode Asset Tracking Software', route: '/asset-management-software/features/barcode-asset-tracking-software', showInInfinity: false, type: 'core' },
        { title: 'QR Code Asset Tracking Software', route: '/asset-management-software/features/qr-code-asset-tracking-software', showInInfinity: false, type: 'none' },
        { title: 'CMDB Software', route: '/asset-management-software/features/cmdb-software', showInInfinity: false, type: 'none' },
        { title: 'IT Asset Discovery Software', route: '/asset-management-software/features/it-asset-discovery', showInInfinity: false, type: 'core' },
        { title: 'Asset Tracking Software', route: '/asset-management-software/features/asset-tracking-software', showInInfinity: false, type: 'none' },
        { title: 'Spare Parts Management System', route: '/asset-management-software/features/spare-parts-management-system', showInInfinity: false, type: 'core' },
        { title: 'Manufacturing Solution', route: '/asset-management-software/features/manufacturing-solution', showInInfinity: false, type: 'none' },
        { title: 'MSP Solution', route: '/asset-management-software/features/msp-solution', showInInfinity: false, type: 'add-on' },
        { title: 'Ticket Management Software', route: '/asset-management-software/features/ticket-management-solutions', showInInfinity: false, type: 'add-on' },
        { title: 'IT Helpdesk Software', route: '/asset-management-software/features/it-helpdesk-software', showInInfinity: false, type: 'add-on' },
        { title: 'Asset Verification & Audit Solution', route: '/asset-management-software/features/asset-verification-and-audit-solution', showInInfinity: false, type: 'none' },
        { title: 'Infrastructure Asset Management Software', route: '/asset-management-software/features/infrastructure-asset-management-software', showInInfinity: false, type: 'none' },
        { title: 'MSP Asset Management Software', route: '/asset-management-software/features/msp-asset-management-software', showInInfinity: false, type: 'none' },
        { title: 'Assets for IT Services', route: '/asset-management-software/features/it-service-solutions', showInInfinity: false, type: 'solution' },
        { title: 'Assets for Education Institutions', route: '/asset-management-software/features/Infraon-Assets-for-education-institutions', showInInfinity: false, type: 'solution' },
        { title: 'Assets for Healthcare', route: '/asset-management-software/features/Infraon-Assets-for-healthcare', showInInfinity: false, type: 'solution' },
        { title: 'Assets for Manufacturing', route: '/asset-management-software/features/Infraon-Assets-for-manufacturing', showInInfinity: false, type: 'solution' },
        { title: 'IT Asset Management for BFSI', route: '/asset-management-software/features/Infraon-ITAM-for-BFSI', showInInfinity: false, type: 'solution' },
    ],
    'infraon-itim': [
        { title: 'IT Event Management', route: '/infraon-itim/features/it-event-management', showInInfinity: false, type: 'core' },
        { title: 'Application Monitoring', route: '/infraon-itim/features/application-monitoring', showInInfinity: true, type: 'add-on' },
        { title: 'API Monitoring', route: '/infraon-itim/features/api-monitoring', showInInfinity: false, type: 'core' },
        { title: 'Fault Management', route: '/infraon-itim/features/fault-management', showInInfinity: true, type: 'core' },
        { title: 'Inventory Management', route: '/infraon-itim/features/inventory-management', showInInfinity: false, type: 'core' },
        { title: 'IT Network Monitoring', route: '/infraon-itim/features/it-network-monitoring', showInInfinity: true, type: 'core' },
        { title: 'IT SLA Management', route: '/infraon-itim/features/sla-management', showInInfinity: false, type: 'add-on' },
        { title: 'Website & URL Monitoring', route: '/infraon-itim/features/website-url-monitoring', showInInfinity: false, type: 'none' },
        { title: 'Server Monitoring', route: '/infraon-itim/features/server-monitoring', showInInfinity: true, type: 'core' },
        { title: 'IT Reports and Dashboards', route: '/infraon-itim/features/it-report-dashborad', showInInfinity: false, type: 'none' },
        { title: 'Port Monitoring', route: '/infraon-itim/features/port-monitoring', showInInfinity: false, type: 'none' },
        { title: 'Cloud Monitoring Solutions', route: '/infraon-itim/features/cloud-monitoring-solutions', showInInfinity: false, type: 'core' },
        { title: 'AWS Monitoring', route: '/infraon-itim/features/aws-monitoring-solutions', showInInfinity: false, type: 'add-on' },
        { title: 'Hybrid Cloud Monitoring', route: '/infraon-itim/features/hybrid-cloud-monitoring', showInInfinity: false, type: 'none' },
        { title: 'Hypervisor Monitoring Solution', route: '/infraon-itim/features/hypervisor-monitoring-solution', showInInfinity: false, type: 'none' },
        { title: 'VMWare Monitoring Tool', route: '/infraon-itim/features/vmware-monitoring-tool', showInInfinity: false, type: 'none' },
        { title: 'Incident Management', route: '/infraon-itsm/features/incident-management-software', showInInfinity: false, type: 'add-on' },
        { title: 'Network Topology', route: '/infraon-nms/features/network-topology', showInInfinity: false, type: 'add-on' },
    ],
    'infraon-nms': [
        { title: 'Network Discovery', route: '/infraon-nms/features/network-discovery', showInInfinity: false, type: 'core' },
        { title: 'Network Performance Management', route: '/infraon-nms/features/network-performence-management', showInInfinity: false, type: 'core' },
        { title: 'Network Fault Management', route: '/infraon-nms/features/network-fault-management', showInInfinity: false, type: 'core' },
        { title: 'Network Event Management', route: '/infraon-nms/features/network-event-management', showInInfinity: false, type: 'core' },
        { title: 'Network Inventory Management', route: '/infraon-nms/features/network-inventory-management', showInInfinity: false, type: 'core' },
        { title: 'Advanced Network Reporting & Dashboard', route: '/infraon-nms/features/nms-reports-dashboard', showInInfinity: false, type: 'add-on' },
        { title: 'Quality of Service', route: '/infraon-nms/features/quality-of-service', showInInfinity: false, type: 'add-on' },
        { title: 'Network Protocols', route: '/infraon-nms/features/network-protocols', showInInfinity: false, type: 'none' },
        { title: 'Network Topology', route: '/infraon-nms/features/network-topology', showInInfinity: false, type: 'core' },
        { title: 'Network SLA Management', route: '/infraon-nms/features/network-sla-management', showInInfinity: false, type: 'add-on' },
        { title: 'Network Switch Management', route: '/infraon-nms/features/network-switch-management', showInInfinity: false, type: 'none' },
        { title: 'Real-time Network Monitoring', route: '/infraon-nms/features/real-time-network-monitoring', showInInfinity: false, type: 'none' },
    ],
    'itsm-software': [
        { title: 'Event Management', route: '/itsm-software/features/event-management', showInInfinity: false, type: 'core' },
        { title: 'Self Service Portal', route: '/itsm-software/features/self-service-portal', showInInfinity: false, type: 'core' },
        { title: 'Service Catalogue Management', route: '/itsm-software/features/catalog-management', showInInfinity: false, type: 'core' },
        { title: 'Workflow Automation', route: '/itsm-software/features/workflow-automation', showInInfinity: true, type: 'add-on' },
        { title: 'Incident Management', route: '/itsm-software/features/incident-management-software', showInInfinity: false, type: 'core' },
        { title: 'Problem Management', route: '/itsm-software/features/problem-management-software', showInInfinity: true, type: 'core' },
        { title: 'Change Management', route: '/itsm-software/features/change-management-software', showInInfinity: true, type: 'core' },
        { title: 'Knowledge Base Management', route: '/itsm-software/features/knowledge-management-software', showInInfinity: true, type: 'add-on' },
        { title: 'Service Request Management', route: '/itsm-software/features/service-request-management', showInInfinity: true, type: 'add-on' },
        { title: 'SLA Management Solution', route: '/itsm-software/features/sla-management-solution', showInInfinity: false, type: 'add-on' },
        { title: 'Release Management Solution', route: '/itsm-software/features/release-management-solution', showInInfinity: false, type: '' },
        { title: 'Task Management Solution', route: '/itsm-software/features/task-management-solution', showInInfinity: false, type: '' },
        { title: 'Utility Management Software', route: '/itsm-software/features/utility-management-software', showInInfinity: false, type: '' },
        { title: 'Purchase Requisition Software', route: '/itsm-software/features/purchase-requisition-software', showInInfinity: false, type: '' },
        { title: 'Auto Allocation Solution', route: '/itsm-software/features/auto-allocation-solution', showInInfinity: false, type: '' },
        { title: 'Enterprise Service Management', route: '/itsm-software/features/enterprise-service-management', showInInfinity: false, type: '' },
        { title: 'Equipment Maintenance Software', route: '/itsm-software/features/equipment-maintenance-software', showInInfinity: false, type: '' },
        { title: 'Leave Management Software', route: '/itsm-software/features/leave-management-solution', showInInfinity: false, type: '' },
        { title: 'Project Management Solution', route: '/itsm-software/features/project-management-solution', showInInfinity: false, type: '' },
        { title: 'ITSM for IT Services', route: '/itsm-software/features/Infraon-ITSM-for-it-service-solution', showInInfinity: false, type: 'solution' },
        { title: 'ITSM for Education Institutions', route: '/itsm-software/features/Infraon-ITSM-for-education-institutions', showInInfinity: false, type: 'solution' },
        { title: 'ITSM for Healthcaare', route: '/itsm-software/features/Infraon-ITSM-for-healthcare', showInInfinity: false, type: 'solution' },
        { title: 'ITSM for Manufacturing', route: '/itsm-software/features/Infraon-ITSM-for-manufacturing', showInInfinity: false, type: 'solution' },
        { title: 'IT Service Management for BFSI', route: '/itsm-software/features/Infraon-ITSM-for-BFSI', showInInfinity: false, type: 'solution' },
    ],
  };

  getFeaturesForProduct(productId: string): Feature[] {
    if (productId === 'infraon-infinity') {
      return this.getAllFeatures().filter(feature => feature.showInInfinity);
    }
    
    return this.featureMap[productId] || [];
  }

  getAllFeatures(): Feature[] {
    return Object.values(this.featureMap).flat();
  }
  
}