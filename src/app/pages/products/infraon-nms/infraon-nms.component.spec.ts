import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonNmsComponent } from './infraon-nms.component';

describe('InfraonNmsComponent', () => {
  let component: InfraonNmsComponent;
  let fixture: ComponentFixture<InfraonNmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonNmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonNmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
