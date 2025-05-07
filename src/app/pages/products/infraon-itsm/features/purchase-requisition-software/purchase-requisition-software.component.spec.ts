import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequisitionSoftwareComponent } from './purchase-requisition-software.component';

describe('PurchaseRequisitionSoftwareComponent', () => {
  let component: PurchaseRequisitionSoftwareComponent;
  let fixture: ComponentFixture<PurchaseRequisitionSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequisitionSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequisitionSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
