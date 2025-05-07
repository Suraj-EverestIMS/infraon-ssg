import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleManagementComponent } from './lifecycle-management.component';

describe('LifecycleManagementComponent', () => {
  let component: LifecycleManagementComponent;
  let fixture: ComponentFixture<LifecycleManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
