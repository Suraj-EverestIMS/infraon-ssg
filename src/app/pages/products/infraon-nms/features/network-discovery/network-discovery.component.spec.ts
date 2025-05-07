import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDiscoveryComponent } from './network-discovery.component';

describe('NetworkDiscoveryComponent', () => {
  let component: NetworkDiscoveryComponent;
  let fixture: ComponentFixture<NetworkDiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkDiscoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
