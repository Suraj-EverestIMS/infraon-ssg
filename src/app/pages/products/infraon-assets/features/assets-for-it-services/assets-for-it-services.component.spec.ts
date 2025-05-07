import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsForItServicesComponent } from './assets-for-it-services.component';

describe('AssetsForItServicesComponent', () => {
  let component: AssetsForItServicesComponent;
  let fixture: ComponentFixture<AssetsForItServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsForItServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsForItServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
