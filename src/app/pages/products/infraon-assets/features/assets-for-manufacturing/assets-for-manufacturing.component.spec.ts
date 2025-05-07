import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsForManufacturingComponent } from './assets-for-manufacturing.component';

describe('AssetsForManufacturingComponent', () => {
  let component: AssetsForManufacturingComponent;
  let fixture: ComponentFixture<AssetsForManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsForManufacturingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsForManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
