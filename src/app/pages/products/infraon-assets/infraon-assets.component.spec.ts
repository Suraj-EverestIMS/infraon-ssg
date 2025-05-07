import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonAssetsComponent } from './infraon-assets.component';

describe('InfraonAssetsComponent', () => {
  let component: InfraonAssetsComponent;
  let fixture: ComponentFixture<InfraonAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
