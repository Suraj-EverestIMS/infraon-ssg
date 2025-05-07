import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonAiopsComponent } from './infraon-aiops.component';

describe('InfraonAiopsComponent', () => {
  let component: InfraonAiopsComponent;
  let fixture: ComponentFixture<InfraonAiopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonAiopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonAiopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
