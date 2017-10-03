import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBuyerComponent } from './service-buyer.component';

describe('ServiceBuyerComponent', () => {
  let component: ServiceBuyerComponent;
  let fixture: ComponentFixture<ServiceBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
