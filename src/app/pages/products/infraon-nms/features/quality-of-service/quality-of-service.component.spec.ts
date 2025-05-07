import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityOfServiceComponent } from './quality-of-service.component';

describe('QualityOfServiceComponent', () => {
  let component: QualityOfServiceComponent;
  let fixture: ComponentFixture<QualityOfServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityOfServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
