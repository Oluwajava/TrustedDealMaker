import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFIReceivedComponent } from './rfireceived.component';

describe('RFIReceivedComponent', () => {
  let component: RFIReceivedComponent;
  let fixture: ComponentFixture<RFIReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFIReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFIReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
