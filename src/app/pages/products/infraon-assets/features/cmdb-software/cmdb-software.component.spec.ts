import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdbSoftwareComponent } from './cmdb-software.component';

describe('CmdbSoftwareComponent', () => {
  let component: CmdbSoftwareComponent;
  let fixture: ComponentFixture<CmdbSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdbSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmdbSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
