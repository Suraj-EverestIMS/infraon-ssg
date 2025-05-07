import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonInfinityComponent } from './infraon-infinity.component';

describe('InfraonInfinityComponent', () => {
  let component: InfraonInfinityComponent;
  let fixture: ComponentFixture<InfraonInfinityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonInfinityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonInfinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
