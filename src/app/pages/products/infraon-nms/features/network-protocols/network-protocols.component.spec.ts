import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkProtocolsComponent } from './network-protocols.component';

describe('NetworkProtocolsComponent', () => {
  let component: NetworkProtocolsComponent;
  let fixture: ComponentFixture<NetworkProtocolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkProtocolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
