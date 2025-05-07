import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonItimComponent } from './infraon-itim.component';

describe('InfraonItimComponent', () => {
  let component: InfraonItimComponent;
  let fixture: ComponentFixture<InfraonItimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonItimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonItimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
