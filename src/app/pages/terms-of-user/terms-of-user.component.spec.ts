import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOfUserComponent } from './terms-of-user.component';

describe('TermsOfUserComponent', () => {
  let component: TermsOfUserComponent;
  let fixture: ComponentFixture<TermsOfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsOfUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
