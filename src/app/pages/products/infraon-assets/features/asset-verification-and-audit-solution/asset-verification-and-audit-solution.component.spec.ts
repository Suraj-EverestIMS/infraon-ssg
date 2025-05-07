import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetVerificationAndAuditSolutionComponent } from './asset-verification-and-audit-solution.component';

describe('AssetVerificationAndAuditSolutionComponent', () => {
  let component: AssetVerificationAndAuditSolutionComponent;
  let fixture: ComponentFixture<AssetVerificationAndAuditSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetVerificationAndAuditSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetVerificationAndAuditSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
