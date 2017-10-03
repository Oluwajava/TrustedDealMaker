import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBidsComponent } from './active-bids.component';

describe('ActiveBidsComponent', () => {
  let component: ActiveBidsComponent;
  let fixture: ComponentFixture<ActiveBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
