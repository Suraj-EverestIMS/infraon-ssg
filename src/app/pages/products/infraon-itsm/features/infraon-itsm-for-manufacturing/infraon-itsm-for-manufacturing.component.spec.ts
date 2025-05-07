import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonITSMForManufacturingComponent } from './infraon-itsm-for-manufacturing.component';

describe('InfraonITSMForManufacturingComponent', () => {
  let component: InfraonITSMForManufacturingComponent;
  let fixture: ComponentFixture<InfraonITSMForManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonITSMForManufacturingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonITSMForManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
