import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonITSMForBFSIComponent } from './infraon-itsm-for-bfsi.component';

describe('InfraonITSMForBFSIComponent', () => {
  let component: InfraonITSMForBFSIComponent;
  let fixture: ComponentFixture<InfraonITSMForBFSIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonITSMForBFSIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonITSMForBFSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
