import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonItsmComponent } from './infraon-itsm.component';

describe('InfraonItsmComponent', () => {
  let component: InfraonItsmComponent;
  let fixture: ComponentFixture<InfraonItsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonItsmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonItsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
