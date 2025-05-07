import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItEventManagementComponent } from './it-event-management.component';

describe('ItEventManagementComponent', () => {
  let component: ItEventManagementComponent;
  let fixture: ComponentFixture<ItEventManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItEventManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItEventManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
