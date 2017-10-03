import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFIPostedComponent } from './rfiposted.component';

describe('RFIPostedComponent', () => {
  let component: RFIPostedComponent;
  let fixture: ComponentFixture<RFIPostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFIPostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFIPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
