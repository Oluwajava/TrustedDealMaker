import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAcceptedComponent } from './offer-accepted.component';

describe('OfferAcceptedComponent', () => {
  let component: OfferAcceptedComponent;
  let fixture: ComponentFixture<OfferAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
