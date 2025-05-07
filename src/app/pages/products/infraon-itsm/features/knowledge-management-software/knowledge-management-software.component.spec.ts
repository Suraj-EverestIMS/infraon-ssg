import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeManagementSoftwareComponent } from './knowledge-management-software.component';

describe('KnowledgeManagementSoftwareComponent', () => {
  let component: KnowledgeManagementSoftwareComponent;
  let fixture: ComponentFixture<KnowledgeManagementSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeManagementSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeManagementSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
