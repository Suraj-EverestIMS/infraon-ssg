import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraonOssComponent } from './infraon-oss.component';

describe('InfraonOssComponent', () => {
  let component: InfraonOssComponent;
  let fixture: ComponentFixture<InfraonOssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraonOssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraonOssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
