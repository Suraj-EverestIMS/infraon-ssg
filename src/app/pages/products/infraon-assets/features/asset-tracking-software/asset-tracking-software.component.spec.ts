import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrackingSoftwareComponent } from './asset-tracking-software.component';

describe('AssetTrackingSoftwareComponent', () => {
  let component: AssetTrackingSoftwareComponent;
  let fixture: ComponentFixture<AssetTrackingSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTrackingSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetTrackingSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
