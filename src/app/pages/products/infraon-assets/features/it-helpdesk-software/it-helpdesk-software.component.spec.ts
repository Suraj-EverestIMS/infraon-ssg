import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItHelpdeskSoftwareComponent } from './it-helpdesk-software.component';

describe('ItHelpdeskSoftwareComponent', () => {
  let component: ItHelpdeskSoftwareComponent;
  let fixture: ComponentFixture<ItHelpdeskSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItHelpdeskSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItHelpdeskSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
