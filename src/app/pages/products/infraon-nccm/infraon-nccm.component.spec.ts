import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonNccmComponent } from './infraon-nccm.component';

describe('InfraonNccmComponent', () => {
  let component: InfraonNccmComponent;
  let fixture: ComponentFixture<InfraonNccmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonNccmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonNccmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
